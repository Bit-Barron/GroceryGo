import { Toaster, toast } from "sonner";
import axios from "axios";
import { AdminProductsStore } from "@/store/admin/AdminProducts";
import React, { FormEvent } from "react";
import { useSnapshot } from "valtio";
import cookie from "cookie";
import { Button } from "@/components/ui/button";
import { AiOutlineSave } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";

interface ProductsProps {}

export const ProductsUpsert: React.FC<ProductsProps> = ({}) => {
  const productStore = useSnapshot(AdminProductsStore);

  const createProduct = async (e: FormEvent) => {
    e.preventDefault();

    const getToken = cookie.parse(document.cookie);
    const userId = getToken["userId"];

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_REST_ENDPOINT}/api/createProduct`,
        {
          title: productStore.title,
          description: productStore.description,
          smallDescription: productStore.smallDescription,
          price: productStore.price,
          userId: userId,
        }
      );

      if (response) {
        toast.success("Product created");
        return response;
      }
    } catch (err) {
      toast.error("An error occured");
    }
  };

  const buttonActions = (
    <div className="flex justify-end space-x-5">
      <Button type="button" Icon={GiCancel}>
        Cancel
      </Button>
      <Button type="submit" Icon={AiOutlineSave}>
        Save
      </Button>
    </div>
  );

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

      {buttonActions}
    </form>
  );
};
