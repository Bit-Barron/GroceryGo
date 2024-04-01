"use client";

import { AiOutlinePlus } from "react-icons/ai";
import React, { useEffect } from "react";
import { AdminProductsStore } from "@/store/admin/AdminProducts";
import { useSnapshot } from "valtio";
import { CategoriesProps, ProductsProps } from "@/types/interface";
import { AdminCategoryStore } from "@/store/admin/AdminCategory";
import { CldImage } from "next-cloudinary";

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
  }, []);

  return (
    <div className="!bg-white !h-screen">
      <div></div>
    </div>
  );
};
export default Page;
