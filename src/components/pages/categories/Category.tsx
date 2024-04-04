import React from "react";
import { useSnapshot } from "valtio";
import { AdminCategoryStore } from "@/store/admin/AdminCategory";
import { Button } from "@/components/ui/Button";
import { CategoriesList } from "./CategoryList";
import { CategoriesUpsert } from "./CategoryUpsert";

interface CategoriesProps {}

export const Categories: React.FC<CategoriesProps> = ({}) => {
  const categoryStore = useSnapshot(AdminCategoryStore);

  return (
    <>
      <div className="flex space-x-5 bg-container2 p-5 text-white">
        <Button
          onClick={() => {
            categoryStore.setSubpage("upsert");
          }}
          className="!bg-blue-500"
        >
          Create Categories
        </Button>

        <Button
          onClick={() => categoryStore.setSubpage("list")}
          className="!bg-blue-500"
        >
          Show Categories
        </Button>
      </div>
      <div className="p-5">
        <div>{categoryStore.subpage === "list" && <CategoriesList />}</div>
        <div>{categoryStore.subpage === "upsert" && <CategoriesUpsert />}</div>
      </div>
    </>
  );
};
