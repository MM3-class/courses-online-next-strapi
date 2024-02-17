// import { Card, CardBody, CardHeader, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import { Button, Card } from "react-bootstrap";

const CardItem = ({ course }) => {
    const { title, price, description, tag, review, rate, trainer } = course?.attributes
    const id = course
    const banner = course.attributes.banner.data.attributes
    // console.log("CARD", banner.url)
    return (
        <Card style={{ width: '22rem', height: "fit-content", border: "none"}} className="shadow-md">
        <Card.Img variant="top" src={banner.url} className=" h-56" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="opacity-75 mb-2">{tag}</Card.Subtitle>
          <Card.Text className=" h-32 overflow-y-hidden from-50% bg-gradient-to-t ">
            {description}
          </Card.Text>
          <Button className="text-black hover:!text-white" variant="primary">Check Course</Button>
        </Card.Body>
      </Card>
    );
};

export default CardItem;
