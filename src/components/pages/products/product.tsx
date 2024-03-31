import React from "react";
import { useSnapshot } from "valtio";
import { AdminProductsStore } from "@/store/admin/AdminProducts";
import { Button } from "@/components/ui/button";
import { ProductsList } from "./productlist";
import { ProductsUpsert } from "./productupsert";

export const Products: React.FC = ({}) => {
  const productStore = useSnapshot(AdminProductsStore);

  return (
    <>
      <div className="flex space-x-5 bg-container2 p-5 text-white">
        <Button
          onClick={() => {
            productStore.setSubpage("upsert");
          }}
          className="!bg-blue-500"
        >
          Add Product
        </Button>

        <Button
          onClick={() => productStore.setSubpage("list")}
          className="!bg-blue-500"
        >
          Show Products
        </Button>
      </div>
      <div className="p-5">
        <div>{productStore.subpage === "list" && <ProductsList />}</div>
        <div>{productStore.subpage === "upsert" && <ProductsUpsert />}</div>
      </div>
    </>
  );
};
