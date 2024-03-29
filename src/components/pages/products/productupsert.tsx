import { Toaster, toast } from "sonner";
import axios from "axios";
import { AdminProductsStore } from "@/store/admin/AdminProducts";
import React, { FormEvent, useState } from "react";
import { useSnapshot } from "valtio";
import cookie from "cookie";
import { CgRename } from "react-icons/cg";
import { Input } from "@/components/ui/input";
import { FaDollarSign } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { GiCancel } from "react-icons/gi";
import { AiOutlineSave } from "react-icons/ai";
import { MdOutlineDiscount } from "react-icons/md";
import { Textarea } from "@/components/ui/textarea";
import { FaImages } from "react-icons/fa";

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
          price: `${productStore.price}€`,
          userId: userId,
          discount: `${productStore.discount}%`,
        }
      );

      return toast.success("Product created");
    } catch (err) {
      return toast.error("An error occured");
    }
  };

  const buttonActions = (
    <div className="flex justify-end space-x-5 text-white">
      <Button type="button" className="!bg-[#416D19]">
        Cancel
      </Button>
      <Button type="submit" className="!bg-[#416D19]">
        Save
      </Button>
    </div>
  );

  return (
    <form
      onSubmit={(event) => createProduct(event as FormEvent)}
      className="space-y-8 divide-y divide-gray-700 rounded-md p-5 text-black"
    >
      <Toaster />
      <div>QrCode</div>
      <div className="pt-5">{buttonActions}</div>
    </form>
  );
};
