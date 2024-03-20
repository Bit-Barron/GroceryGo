import React from "react";
import { AdminProductsList } from "./AdminProductsList";
import { AiOutlineAppstoreAdd, AiOutlineOrderedList } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AdminProductsUpsert } from "./AdminProductsUpsert";

export const AdminProducts: React.FC = ({}) => {
  const { setSubpage, subpage } = AdminCategoryStore();
  const router = useRouter();

  return (
    <>
      <div className="flex space-x-5 bg-container2 p-5">
        <Button
          Icon={AiOutlineAppstoreAdd}
          onClick={() => {
            setSubpage("upsert");
          }}
        >
          Add products
        </Button>
        <Button Icon={AiOutlineOrderedList} onClick={() => setSubpage("list")}>
          Products list
        </Button>
      </div>
      <div className="p-5">
        <div>{subpage === "list" && <AdminProductsList />}</div>
        <div>{subpage === "upsert" && <AdminProductsUpsert />}</div>
      </div>
    </>
  );
};
