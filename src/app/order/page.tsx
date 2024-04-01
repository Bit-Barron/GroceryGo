"use client";

import React, { useEffect } from "react";
import { AdminProductsStore } from "@/store/admin/AdminProducts";
import { useSnapshot } from "valtio";
import { ProductsProps } from "@/types/interface";
import { AdminCategoryStore } from "@/store/admin/AdminCategory";

interface pageProps {}

const Page: React.FC<pageProps> = ({}) => {
  const productStore = useSnapshot(AdminProductsStore);
  const categoryStore = useSnapshot(AdminCategoryStore);

  useEffect(() => {
    const extractParamsAndSaveAsCookies = () => {
      const url = new URL(window.location.href);
      const tablenumber = url.searchParams.get("tablenumber");
      const restaurantid = url.searchParams.get("restaurantid");

      productStore.getProductById();
      categoryStore.getCategoriesById();
    };

    if (location.search) {
      extractParamsAndSaveAsCookies();
    }
  }, [categoryStore, productStore]);

  console.log(productStore.product, categoryStore.category);

  return (
    <>
      <div className="!text-black !bg-white !h-screen">
        {productStore.product.map((item: ProductsProps) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>{item.discount}</p>
            <p>{item.category}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default Page;
