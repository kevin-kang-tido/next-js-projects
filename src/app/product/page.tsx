// 'use client'
import CardComponent from '@/components/cards/CardComponent'
import Link from 'next/link'
import React from 'react'
import { ProductType } from "@/types/product";
import { Suspense } from "react";
import LoadingComponent from "../loading";
import async from './../page';
import { useRouter } from 'next/router';


async function fetchProduct() {
  const product = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store"
  });
  const res = await product.json();
  return res;
}

async function page() {
  const router = useRouter();
  const product = await fetchProduct();

  return (
    <>
      <div className="mt-10 flex justify-center flex-wrap gap-5">
        <h1 className="font-bold text-large">Hello </h1>
        <Suspense fallback={<LoadingComponent/>} >
        {
        product?.map((pro: ProductType) => {
          return(
            <div onClick={()=>router.push(`/product/${pro.id}`) } key={pro.id}>
                <CardComponent
                thumbnail={pro.image}
                title={pro.title}
                key={pro.id}
                />
            </div> 
          )})
        }
        </Suspense>
      </div>
    </>
  )
}

export default page
