
import CardComponent from '@/components/cards/CardComponent';
import { ProductType } from '@/types/product';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Data-API",
  description: "This is Data API description ",
  keywords: ["shop", "ecommerce", "sell"]
}


async function fetchDataApi(){
  const getDataApi = await fetch("https://fakestoreapi.com/products");
  const res = await getDataApi.json();
  return res;
}



async function dataAPI(){
  const data_api = await fetchDataApi();
  
  return (
    <>
     {/* return( */}
      <div className='mt-10 flex justify-center flex-wrap gap-5'>
      <h1 className="font-bold text-large">Data api </h1>
      {
        data_api?.map((pro: ProductType) => {
          return(
            <Link href={`/data-api/${pro.id}`} key={pro.id}>
                <CardComponent
                thumbnail={pro.image}
                title={pro.title}
                key={pro.id}
                />
            </Link> 
          )})
        }
    </div>
     {/* ) */}
    </>

  )
}
export default dataAPI