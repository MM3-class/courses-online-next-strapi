"use client";
import api from "@/lib/api";
import React, { useEffect, useState } from "react";
import ProductIdCard from "../_components/ProductIdCard";
import { Spinner } from "react-bootstrap";
import LoopingList from "@/components/LoopingList";
import SimilarCard from "../_components/SimilarCard";

const page = ({ params }) => {
  const [productInfo, setProductInfo] = useState({});
  const [similarList, setSimilarList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const productId = params.productId;

  const getProductInfo = async () => {
    try {
      const response = await api.get(`/courses/${productId}?populate=*`);
      const data = await response.data.data.attributes;
      setIsLoading(false);
      setProductInfo(data);
      getSimilar(data?.category);
      console.log(data);
    } catch (err) {
      setIsError(err.message);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };
  const getSimilar = (category) => {
    api
      .get(`/courses?filters[category][$eq]=${category}&populate=*`)
      .then((res) => {
        setSimilarList(res?.data.data);
      });
  };
  console.log(similarList);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    getProductInfo();
    getSimilar();
  }, [productId]);
  return (
    <>
      {isLoading ? (
        <div className="text-center my-24">
          <Spinner />
        </div>
      ) : (
        <ProductIdCard productId={productId} productInfo={productInfo} />
      )}

      <div className="p-12 mt-32 mb-22">
        <h1 className="title pb-10">Similar Products</h1>
        {isLoading ? (
          <div className="text-center my-24">
            <Spinner />
          </div>
        ) : (
          <div className="flex flex-wrap gap-8">
            <LoopingList
              key={productId}
              items={similarList}
              itemComponent={SimilarCard}
              resourceName="similarProduct"
            />
          </div>
        )}
        <p className="text-center text-2xl text-red-700">{isError}</p>
      </div>
    </>
  );
};

export default page;
