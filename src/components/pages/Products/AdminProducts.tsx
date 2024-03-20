import React from "react";
import { AiOutlineAppstoreAdd, AiOutlineOrderedList } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { AdminProductsUpsert } from "./AdminProductsUpsert";
import { useSnapshot } from "valtio";
import { AdminProductsStore } from "../../../store/admin/categories/AdminProducts";
import { AdminProductsList } from "./AdminProductsList";

export const AdminProducts: React.FC = ({}) => {
  const adminCategories = useSnapshot(AdminProductsStore);

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
          Add products
        </Button>
        <Button
          className="text-white"
          Icon={AiOutlineOrderedList}
          onClick={() => adminCategories.setSubpage("list")}
        >
          Products list
        </Button>
      </div>
      <div className="p-5">
        <div>{adminCategories.subpage === "list" && <AdminProductsList />}</div>
        <div>
          {adminCategories.subpage === "upsert" && <AdminProductsUpsert />}
        </div>
      </div>
    </>
  );
};
