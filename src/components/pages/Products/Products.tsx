import React from "react";
import { AiOutlineAppstoreAdd, AiOutlineOrderedList } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { ProductsUpsert } from "./ProductsUpsert";
import { useSnapshot } from "valtio";
import { AdminProductsStore } from "../../../store/admin/AdminProducts";
import { ProductsList } from "./ProductsList";

export const Products: React.FC = ({}) => {
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
        <div>{adminCategories.subpage === "list" && <ProductsList />}</div>
        <div>
          {adminCategories.subpage === "upsert" && <ProductsUpsert />}
        </div>
      </div>
    </>
  );
};
