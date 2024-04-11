import React from "react";
import { useSnapshot } from "valtio";
import { AdminProductsStore } from "@/store/admin/AdminProducts";
import { Button } from "@/components/ui/elements/Button";
import { QrCodeList } from "./QrCodeList";
import { QrCodeUpsert } from "./QrCodeUpsert";

export const QrCode: React.FC = ({}) => {
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
          Add Qr Code
        </Button>

        <Button
          onClick={() => productStore.setSubpage("list")}
          className="!bg-blue-500"
        >
          Show Qr Code
        </Button>
      </div>
      <div className="p-5">
        <div>{productStore.subpage === "list" && <QrCodeList />}</div>
        <div>{productStore.subpage === "upsert" && <QrCodeUpsert />}</div>
      </div>
    </>
  );
};
