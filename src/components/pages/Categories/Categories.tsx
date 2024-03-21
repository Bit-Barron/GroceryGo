import React from "react";
import { AiOutlineAppstoreAdd, AiOutlineOrderedList } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { useSnapshot } from "valtio";
import { AdminCategoryStore } from "@/store/admin/AdminCategory";
import { CategoriesList } from "./CategoriesList";
import { CategoriesUpsert } from "./CategoriesUpsert";

export const Categories: React.FC = ({}) => {
  const adminCategories = useSnapshot(AdminCategoryStore);

  return (
    <>
      <div className="flex space-x-5 bg-container2 p-5">
        <Button
          className="text-white"
          Icon={AiOutlineAppstoreAdd}
          onClick={() => {
            adminCategories.setSubpage("upsert");
          }}
        >
          Add Category
        </Button>
        <Button
          className="text-white"
          Icon={AiOutlineOrderedList}
          onClick={() => adminCategories.setSubpage("list")}
        >
          Category List
        </Button>
      </div>
      <div className="p-5">
        <div>
          {adminCategories.subpage === "list" && <CategoriesList />}
        </div>
        <div>
          {adminCategories.subpage === "upsert" && <CategoriesUpsert />}
        </div>
      </div>
    </>
  );
};
