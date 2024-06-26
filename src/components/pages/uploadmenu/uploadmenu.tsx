import React from "react";
import { useSnapshot } from "valtio";
import { UploadMenuUpsert } from "@/components/pages/uploadmenu/UploadMenuUpsert";
import { UploadMenuList } from "@/components/pages/uploadmenu/UploadMenuList";
import { AdminProductsStore } from "@/store/admin/ProductStore";
import { Button } from "@/components/ui/elements/Button";

export const UploadMenu: React.FC = ({}) => {
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
          Add Menu
        </Button>

        <Button
          onClick={() => productStore.setSubpage("list")}
          className="!bg-blue-500"
        >
          Menu List
        </Button>
      </div>
      <div className="p-5">
        <div>{productStore.subpage === "list" && <UploadMenuList />}</div>
        <div>{productStore.subpage === "upsert" && <UploadMenuUpsert />}</div>
      </div>
    </>
  );
};
