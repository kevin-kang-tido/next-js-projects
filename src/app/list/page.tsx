import React from 'react'
import ListComponent from './ListComponent'
import { Metadata } from 'next'



export const metadata: Metadata = {
    title: "List",
    description: "This is description shop",
    keywords: ["shop", "ecommerce", "sell"]
}


export default function page() {
  return (
    <>
     <ListComponent/>
    </>
  )
}


