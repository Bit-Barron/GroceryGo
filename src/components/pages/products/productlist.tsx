import React from "react";
import { Toaster } from "sonner";
import { columns } from "@/components/elements/products/columns";
import { DataTable } from "@/components/elements/products/table";

interface ProductsListProps {}

export const ProductsList: React.FC<ProductsListProps> = ({}) => {
  return (
    <form>
      <Toaster />

      <div className="mx-auto container">
        <div className="mt-10 mb-10">
          <h1 className="font-bold text-black text-xl">Products</h1>
        </div>
        <DataTable columns={columns} />
      </div>
    </form>
  );
};
