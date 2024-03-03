"use client";
import React, { useEffect, useState } from "react";
import WidthWrapper from "./WidthWrapper";
import api from "@/lib/api";
import LoopingList from "./LoopingList";
import Card from "./Card";
import { Spinner } from "react-bootstrap";

const Products = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const getLatestCourses = async () => {
    setIsLoading(true);
    try {
      const response = await api.get("courses?populate=*");
      const data = await response.data;
      console.log(data.data);
      setCourses(data.data);
      setIsLoading(false);
      return data;
    } catch (err) {
      console.log("Something Went Wrong", err);
      setIsError(`${err.message}!!!`);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getLatestCourses();
  }, []);
  return (
    <WidthWrapper className="container">
      <h1 className="title">Most Popular Courses</h1>
      <section>
        {!isLoading ? (
          <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-16 w-full">
            <LoopingList
            key={courses?.id}
              items={courses}
              itemComponent={Card}
              resourceName="course"
            />
          </div>
        ) : (
          <div className="text-center">
            <Spinner />
          </div>
        )}
        <p className="text-center text-2xl text-red-700 my-20">{isError}</p>
      </section>
    </WidthWrapper>
  );
};

export default Products;
