import React from "react";
import {
  formatPrice,
  starArray,
  dateCourse,
  formattedNumber,
} from "@/helper/helper";
import { Star } from "lucide-react";
import { Col, Row, Container, Image, Button } from "react-bootstrap";
import WidthWrapper from "@/components/WidthWrapper";
import uuid from "react-uuid";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const ProductIdCard = ({ productInfo }) => {
  const { user } = useUser();
  const router = useRouter();
  console.log(user);
  const handleEnrollClick = () => {
    if (!user) {
      return router.push("/signIn");
    } else {
      return router.push("/checkout");
    }
  };
  return (
    <WidthWrapper>
      <h1 className="title">{productInfo.title}</h1>
      <Container>
        <Row>
          <Col xl={6}>
            <Image
              src={productInfo?.banner?.data.attributes.url}
              className="w-full"
              rounded
            />
          </Col>
          <Col xl={6} className="space-y-4 my-6 xl:my-0">
            <h4 className="text-lg">{productInfo.description}</h4>
            <p className="text-xl font-bold">
              {formatPrice(productInfo.price)}
            </p>
            <p className="flex gap-1 items-center">
              <span>{productInfo.rate}</span>
              {starArray.map((rating) =>
                productInfo.rate >= rating ? (
                  <Star key={uuid()} color="#e19d09" />
                ) : (
                  <Star key={uuid()} color="#666" />
                )
              )}
              <span>{`(${formattedNumber(productInfo.review)} ratings)`}</span>
            </p>
            <p className="font-semibold">{`Created by ${productInfo.trainer}`}</p>
            <p className="font-semibold">{`last Updated ${dateCourse(
              productInfo.createdAt
            )}`}</p>
            <Button
              onClick={handleEnrollClick}
              variant="primary"
              className="w-1/2 text-center bg-primary p-2"
            >
              Enroll
            </Button>
          </Col>
        </Row>
      </Container>
    </WidthWrapper>
  );
};

export default ProductIdCard;
