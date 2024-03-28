import { ProductType } from '@/types/product';
import React from 'react'
import { Metadata } from 'next';

type paragramType =  {
    params:{
        id:number
    }
}
async function getDataById(id:number){
    const data = await fetch(`https://fakestoreapi.com/products/${id}`);
    const res = await data.json;
    return res;
}

export async function generateMetadata({params}: any) {
    const id = params.id
    const product = await getDataById(id);
    return {
      title: product?.title,
      describe: product.description,
      openGraph: {
        images: product.image,
      }
    }
  }

export default async function page(params:paragramType) {
    const id = params.params.id;
    const get = await getDataById(id);
  return (
    <div>

        <div> 
        
            <h1>{id}{get.title}</h1>
        </div>

    </div>
  )
}
