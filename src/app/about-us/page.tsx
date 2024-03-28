import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "About-Us",
  description: "This is About Us description shop",
  keywords: ["shop", "ecommerce", "sell"]
}
const page = () => {
  return (
    <div>
      About Page
      This is homepages
    </div>
  )
}

export default page
