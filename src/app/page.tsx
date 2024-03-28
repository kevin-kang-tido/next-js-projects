import CardComponent from "@/components/cards/CardComponent";
import { ProductType } from "@/types/product";
import { Suspense } from "react";
import LoadingComponent from "./loading";
// import LoadingComponent from "./loading";

async function fetchProduct() {
  const product = await fetch("https://dummyjson.com/products?limit=100", {
    cache: "no-store"
  });
  const res = await product.json();
  return res.products;
}

export default async function Home() {
  const product = await fetchProduct();

  return (
    <>
     <h1 className="font-bold text-large text-center m-5">មកដឹងឲ្យច្បាស់កុំច្រឡំ ពានបាល់ទះធំៗ២ព្រឹត្តិការណ៍នេះឈ្នះ៣ឆ្នាំជាប់គ្នាទើបយកពានទៅផ្ទះបាន</h1>
      <div className="mt-10 flex justify-center flex-wrap gap-5">
        <Suspense fallback={<LoadingComponent/>} >
        {product?.map((pro: ProductType) => (
          <CardComponent
            thumbnail={pro.thumbnail}
            title={pro.title}
            key={pro.id}
          />
        ))}
        </Suspense>
      </div>
    </>
  );
}
