import React from "react";
import { AdminProductsList } from "./AdminProductsList";
import { AiOutlineAppstoreAdd, AiOutlineOrderedList } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AdminProductsUpsert } from "./AdminProductsUpsert";
import { useSnapshot } from "valtio";
import { AdminCategories } from "../../../store/admin/categories/AdminCategories";

export const AdminProducts: React.FC = ({}) => {
  const router = useRouter();
  const adminCategories = useSnapshot(AdminCategories);

  return (
    <>
      <div className="flex space-x-5 bg-container2 p-5">
        <Button
          Icon={AiOutlineAppstoreAdd}
          onClick={() => {
            adminCategories.setSubpage("upsert");
          }}
        >
          Add products
        </Button>
        <Button
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
