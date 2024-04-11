"use client";

import React, { useEffect } from "react";
import { useSnapshot } from "valtio";
import { CategoriesProps } from "@/types/interface";
import { AdminCategoryStore } from "@/store/admin/AdminCategory";
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
      <div className="!bg-white">
        <h1 className="text-black text-xl font-bold text-center p-2">
          We offer numerous categories
        </h1>
        <div className="overflow-y-auto">
          {adminCategoryStore.category.map((item: CategoriesProps) => {
            return (
              <div key={item.id} className="p-3 mb-5">
                <Card className="bg-green-600">
                  <CardContent className="mt-2 !text-white">
                    <div className="text-xl text-white font-bold">
                      {item.title}
                    </div>
                    <div className="">{item.description}</div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
