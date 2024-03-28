import React from 'react';
import { describe } from "node:test";
import { title } from "process";

type ParamProps = {
    params:{
      id:number
    }
}

async function getDetail(id: number) {
  const productDetail = await fetch(`https://fakestoreapi.com/products/${id}`);
  return productDetail.json();
}

export async function generateMetadata({params}: any) {
  const id = params.id
  const product = await getDetail(id);
  return {
    title: product?.title,
    describe: product.description,
    openGraph: {
      images: product.image,
    }
  }
}


// async function getDetailProduct(id:number){
//   const productDetail = await fetch(`https://fakestoreapi.com/products/${id}`);
//   return productDetail.json();
// }

async function page({ params }: ParamProps){
  const  id  = params.id; // Destructure id directly from params
  const productDetailInfo= await getDetail(id);
  return (
    <div>
      Detail page {id}
      <h1>{productDetailInfo.title}</h1>
      <img className="w-80" src={productDetailInfo.image} />
    </div>
  );
}

export default page;
