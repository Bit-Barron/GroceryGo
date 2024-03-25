import { toast } from "sonner";
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
          price: `${productStore.price} €`,
          userId: userId,
          discount: `${productStore.discount}%`,
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

  console.log(productStore.image);

  const buttonActions = (
    <div className="flex justify-end space-x-5 text-white">
      <Button type="button" Icon={GiCancel}>
        Cancel
      </Button>
      <Button type="submit" Icon={AiOutlineSave}>
        Save
      </Button>
    </div>
  );

  return (
    <form
      onSubmit={createProduct}
      className="space-y-8 divide-y divide-gray-700 rounded-md bg-container p-5 text-black"
    >
      <div className="space-y-8 divide-y divide-gray-700 sm:space-y-5">
        <div className="space-y-6 sm:space-y-5">
          <div>
            <h3 className="text-lg font-medium leading-6">Product</h3>
            <p className="mt-1 max-w-2xl text-sm ">
              This Information will be displayed publicly
            </p>
          </div>

          <div className="space-y-6 sm:space-y-5">
            <Input
              value={productStore.title}
              onChange={(e) => productStore.setTitle(e.target.value)}
              type="text"
              Icon={CgRename}
              placeholder={"Product Title"}
              name={"title"}
              id={"title"}
            />

            <Input
              type="text"
              value={productStore.description}
              onChange={(e) => productStore.setDescription(e.target.value)}
              Icon={CgRename}
              placeholder={"Product Description"}
              name={"description"}
            />
            <Input
              type="number"
              value={`${productStore.price}`}
              onChange={(e) => productStore.setPrice(e.target.value)}
              Icon={FaDollarSign}
              placeholder={"Product Price"}
              name={"price"}
              id={"price"}
            />

            <Input
              type="text"
              value={productStore.smallDescription}
              onChange={(e) => productStore.setSmallDescription(e.target.value)}
              Icon={CgRename}
              placeholder={"Product Small Description"}
              name={"small description"}
            />
            <Input
              Icon={FaImages}
              type="file"
              placeholder="Product Image"
              onChange={(e) =>
                productStore.setImage(e.target.files?.[0] as File)
              }
            />
          </div>
        </div>

        <div className="space-y-3 pt-8 sm:space-y-5 sm:pt-10">
          <div>
            <h3 className="text-lg font-medium leading-6 ">Categories</h3>
            <p className="mt-1 max-w-2xl">
              Specify Categories the product belongs to.
            </p>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <DropdownMenu>
              <DropdownMenuTrigger>Open</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="space-y-3 pt-8 sm:space-y-5 sm:pt-10">
          <div>
            <h3 className="text-lg font-medium leading-6 ">Discount</h3>
            <p className="mt-1 max-w-2xl">
              Specify the Discount the product belongs to.
            </p>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <Input
              type={"number"}
              placeholder={"Discount"}
              value={productStore.discount}
              name={"promo code"}
              Icon={MdOutlineDiscount}
              id={"promo code"}
              onChange={(e) => productStore.setDiscount(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="pt-5">{buttonActions}</div>
    </form>
  );
};
