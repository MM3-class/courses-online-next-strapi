import WidthWrapper from '@/components/WidthWrapper';
import Link from 'next/link';
import React from 'react'
import { Button, Card } from 'react-bootstrap'

const SimilarCard = ({ similarProduct }) => {
  const { title, tag, subtitle } = similarProduct.attributes
  const id = similarProduct?.id;
  const banner = similarProduct.attributes.banner.data.attributes;
  return (
        <Card className="w-[20rem] h-fit border-none shadow-md m-auto">
          <Card.Img variant="top" src={banner.url} className=" h-56" />
          <Card.Body>
            <Card.Title className="mb-4">{title}</Card.Title>
            <Card.Text className="h-20 overflow-y-hidden ">{subtitle}</Card.Text>
            <Link href={`/productDetails/${id}`}>
              <Button
                className="text-black hover:!text-white shadow-md"
                variant="primary"
              >
                Check Course
              </Button>
            </Link>
          </Card.Body>
        </Card>
  )
}

export default SimilarCard