import React from "react";

interface ProductsListProps {}

export const ProductsList: React.FC<ProductsListProps> = ({}) => {
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
      </div>
    </form>
  );
};
