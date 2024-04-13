"use client";

import cookie from 'cookie';
import React, { useEffect } from "react";
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
