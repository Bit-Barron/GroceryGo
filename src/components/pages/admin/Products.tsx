  import React from "react";

interface ProductsProps {}

export const Products: React.FC<ProductsProps> = ({}) => {
  return (
    <form>
      <div className="p-5 rounded-lg mt-10 bg-slate-100 ml-10 mr-10">
        <h1 className="font-bold text-gray-500 text-xl">Products</h1>
      </div>

      <div className="p-5 rounded-lg mt-10 bg-slate-100 ml-10 mr-10"></div>
    </form>
  );
};
