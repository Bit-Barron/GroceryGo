import React from "react";
import { DataTable } from "@/components/elements/products/table";
import { columns } from "@/components/elements/products/columns";
interface ProductsListProps {}

export const ProductsList: React.FC<ProductsListProps> = ({}) => {
  const data = [
    {
      id: 1,
      title: "Product 1",
      description: "Description 1",
      smallDescription: "Small Description 1",
      price: 100,
      discount: "10%",
    },
    {
      id: 2,
      title: "Product 2",
      description: "Description 2",
      smallDescription: "Small Description 2",
      price: 200,
      discount: "10%",
    },
    {
      discount: "10%",
      id: 3,
      title: "Product 3",
      description: "Description 3",
      smallDescription: "Small Description 3",
      price: 300,
    },
  ];

  return (
    <form className="space-y-8 divide-y divide-gray-700 rounded-md bg-white p-5 text-white">
      <div className="space-y-8 divide-y divide-gray-700 sm:space-y-5">
        <div className="space-y-6 sm:space-y-5">
          <div>
            <h3 className="text-lg font-medium leading-6 text-black">
              Product
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-black">
              This Information will be displayed publicly
            </p>
          </div>
        </div>
        <div className="text-black">
          <DataTable columns={columns} data={data as any} />
        </div>
      </div>
    </form>
  );
};
