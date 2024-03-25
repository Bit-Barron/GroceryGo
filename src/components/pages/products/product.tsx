import React, { useEffect } from "react";
import { useSnapshot } from "valtio";
import { AdminProductsStore } from "@/store/admin/AdminProducts";
import { AiOutlineAppstoreAdd, AiOutlineOrderedList } from "react-icons/ai";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { ProductsList } from "./productlist";
import { ProductsUpsert } from "./productupsert";

export const Products: React.FC = ({}) => {
  const productStore = useSnapshot(AdminProductsStore);

  return (
    <>
      <div className="flex space-x-5 bg-container2 p-5 text-white">
        <Button
          Icon={AiOutlineAppstoreAdd}
          onClick={() => {
            productStore.setSubpage("upsert");
          }}
        >
          Add Product
        </Button>
        <Button
          Icon={AiOutlineOrderedList}
          onClick={() => productStore.setSubpage("list")}
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
