"use client";

import React, { useEffect } from "react";
import { useSnapshot } from "valtio";
import { CategoriesProps } from "@/types/interface";
import { AdminCategoryStore } from "@/store/admin/CategoryStore";
import { Card, CardContent } from "@/components/ui/elements/Card";

interface pageProps {}

const Page: React.FC<pageProps> = ({}) => {
  const adminCategoryStore = useSnapshot(AdminCategoryStore);

  useEffect(() => {
    const getCategories = async () => {
      try {
        adminCategoryStore.getCategoriesById();
      } catch (error) {
        console.error(error);
      }
    };
    getCategories();
  }, [adminCategoryStore]);

  return (
    <div className="!bg-white !h-screen">
      
    </div>
  );
};

export default Page;
