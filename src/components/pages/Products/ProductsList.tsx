import { DataTableDemo } from "@/components/elements/Table";
import React from "react";

interface AdminProductsListProps {}

export const ProductsList: React.FC<AdminProductsListProps> = ({}) => {
  return (
    <form className="space-y-8 divide-y divide-gray-700 rounded-md bg-container p-5 text-black">
      <div className="space-y-8 divide-y divide-gray-700 sm:space-y-5">
        <div className="space-y-6 sm:space-y-5">
          <div>
            <h3 className="text-lg font-medium leading-6">Product List</h3>
            <p className="mt-1 max-w-2xl text-sm ">
              This Information will be displayed publicly
            </p>
            <DataTableDemo />
          </div>
        </div>
      </div>
    </form>
  );
};
