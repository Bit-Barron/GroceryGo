import React from "react";
import { LuSubtitles } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { GiCancel } from "react-icons/gi";
import { AiOutlineSave } from "react-icons/ai";
import { Input } from "@/components/ui/input";
import { CgRename } from "react-icons/cg";
import { useSnapshot } from "valtio";
import { AdminProductsStore } from "../../../store/admin/categories/AdminProducts";
import { TbFileDescription } from "react-icons/tb";
import { FaShoppingBasket } from "react-icons/fa";
import { IoPricetags } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BiCategoryAlt } from "react-icons/bi";

interface AdminProductsUpsertProps {}

export const AdminProductsUpsert: React.FC<AdminProductsUpsertProps> = ({}) => {
  const adminProducts = useSnapshot(AdminProductsStore);

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
    <form className="space-y-8 divide-y divide-gray-700 rounded-md bg-container p-5 text-black">
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
              type="text"
              onChange={(e) => adminProducts.setTitle(e.target.value)}
              value={adminProducts.title}
              Icon={LuSubtitles}
              placeholder={"Title *"}
              name={"title"}
              id={"title"}
            />

            <Input
              onChange={(e) => adminProducts.setDescription(e.target.value)}
              value={adminProducts.description}
              type="text"
              Icon={TbFileDescription}
              placeholder={"Description *"}
              name={"description"}
              id={"description"}
            />

            <Input
              onChange={(e) =>
                adminProducts.setSmallDescription(e.target.value)
              }
              value={adminProducts.smallDescription}
              type="text"
              Icon={TbFileDescription}
              placeholder={"Small Description *"}
              name={"smallDescription"}
              id={"smallDescription"}
            />

            <Input type="number" Icon={IoPricetags} placeholder={"Price *"} />

            <Input type="file" Icon={CgRename} placeholder={"upload file *"} />
          </div>
        </div>

        <div className="space-y-3 pt-8 sm:space-y-5 sm:pt-10">
          <div>
            <h3 className="text-lg font-medium leading-6 ">Categories</h3>
            <p className="mt-1 max-w-2xl">
              Specify Categories the product belongs to.
            </p>
            <DropdownMenu>
              <DropdownMenuTrigger className="border mt-5  p-1 rounded-lg w-96">
                <h1 className="flex justify-start items-start gap-3">
                  <BiCategoryAlt className="mt-1" />
                  Select Category *
                </h1>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Categories</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Menue</DropdownMenuItem>
                <DropdownMenuItem>Pizzas</DropdownMenuItem>
                <DropdownMenuItem>Burgers</DropdownMenuItem>
                <DropdownMenuItem>Drinks</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <div className="pt-5">{buttonActions}</div>
    </form>
  );
};
