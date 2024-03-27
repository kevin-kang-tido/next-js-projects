import { ProductType } from '@/types/product';
import React from 'react'

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

export default async function page(params:paragramType) {
    const id = params.params.id;
    const get = await getDataById(id);
  return (
    <div>

        <div>
            <h1>{da.title}</h1>
        </div>

    </div>
  )
}
