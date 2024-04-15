"use client";

import React from "react";
import { AdminProductsStore } from "@/store/admin/AdminProducts";
import { useSnapshot } from "valtio";
import { AdminCategoryStore } from "@/store/admin/AdminCategory";

interface pageProps {}

const Page: React.FC<pageProps> = ({}) => {
  const productStore = useSnapshot(AdminProductsStore);
  const categoryStore = useSnapshot(AdminCategoryStore);

  return (
    <div className="">
      <div></div>
    </div>
  );
};
export default Page;
