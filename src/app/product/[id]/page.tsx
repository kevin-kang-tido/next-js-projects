import React from 'react'
type ParamProps = {
    params:{
      id:number
    }
}
async function getDetailProduct(id:number){
  const productDetail = await fetch(`https://dummyjson.com/products/${id}`);
  return productDetail.json();
}

async function page({params}:ParamProps){
  const id = params.id;
  const productDetail = await getDetailProduct(id);
  return (
    <div>
      Detail page {id}
       <h1>{productDetail.title}</h1>
    </div>
  )
}

export default page
