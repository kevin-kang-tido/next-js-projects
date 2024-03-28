
import CardComponent from '@/components/cards/CardComponent'
import Link from 'next/link'
import React from 'react'
import { ProductType } from "@/types/product";
import { Suspense } from "react";
import LoadingComponent from "../loading";
import async from './../page';
import { Metadata } from 'next';



export const metadata: Metadata = {
  title: "Product",
  description: "This is description shop",
  keywords: ["shop", "ecommerce", "sell"]
}

async function fetchProduct() {
  const product = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store"
  });
  const res = await product.json();
  return res;
}

async function page() {
  const product = await fetchProduct();

  return (
    <>
      <div className="mt-10 flex justify-center flex-wrap gap-5">
        <h1 className="font-bold text-large">Hello </h1>
        <Suspense fallback={<LoadingComponent/>} >
        {
        product?.map((pro: ProductType) => {
          return(
            <Link href={`/product/${pro.id}`} key={pro.id}>
            <CardComponent
              title={pro.title}
              thumbnail={pro.image}
            />
          </Link>
          )})
        }
        </Suspense>
      </div>
    </>
  )
}

export default page
