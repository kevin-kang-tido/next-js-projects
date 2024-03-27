"use client"
import CardComponent from '@/components/cards/CardComponent';
import { ProductType } from '@/types/product';
import {useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function page(){
  const router = useRouter();
  const [data,setData] = useState([]); 


  async function fetchDataApi(){
    const getDataApi = await fetch("https://fakestoreapi.com/products");
    const res = await getDataApi.json();
    setData(res.data);
  }
  useEffect(() => {
    fetchDataApi();
  },[])

  
  return (
    <>
     return(
      <div className='mt-10 flex justify-center flex-wrap gap-5'>
      <h1 className="font-bold text-large">Data api </h1>
      {
        data?.map((pro: ProductType) => {
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
    </div>
     )
    </>

  )
}
