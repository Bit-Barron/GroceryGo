import React, { useEffect } from "react";
import { useSnapshot } from "valtio";
import { AdminProductsStore } from "@/store/admin/AdminProducts";

interface ProductsListProps {}

export const ProductsList: React.FC<ProductsListProps> = ({}) => {
  const productStore = useSnapshot(AdminProductsStore);

  useEffect(() => {
    productStore.getProductById();
  }, [productStore]);

  return (
    <form className="space-y-8 divide-y divide-gray-700 rounded-md">
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
