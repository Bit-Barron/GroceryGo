import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { AdminProductsStore } from "@/store/admin/AdminProducts";
import React, { FormEvent } from "react";
import { useSnapshot } from "valtio";
import { AiOutlineSave } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { MdSubtitles } from "react-icons/md";
import { MdDescription } from "react-icons/md";
import { IoIosPricetags } from "react-icons/io";
import cookie from "cookie";

interface ProductsProps {}

export const Products: React.FC<ProductsProps> = ({}) => {
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

      console.log(response);

      return response;
    } catch (err) {
      console.error(err);
    }
  };

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
    <form onSubmit={(e) => createProduct(e)}>
      <div className="p-5 rounded-lg mt-10 bg-slate-100 ml-10 mr-10">
        <h1 className="font-bold text-black text-xl">Products</h1>
      </div>

      <div className="p-5 rounded-lg mt-10 bg-slate-100 ml-10 mr-10 space-y-10">
        <Input
          onChange={(e) => productStore.setTitle(e.target.value)}
          placeholder="Product Title"
          value={productStore.title}
          Icon={MdSubtitles}
        />

        <Input
          onChange={(e) => productStore.setDescription(e.target.value)}
          placeholder="Product Description"
          value={productStore.description}
          Icon={MdDescription}
        />

        <Input
          onChange={(e) => productStore.setSmallDescription(e.target.value)}
          placeholder="Product Small Description"
          value={productStore.smallDescription}
          Icon={MdDescription}
        />

        <Input
          onChange={(e) => productStore.setPrice(e.target.value as any)}
          placeholder="Product Price"
          type="number"
          Icon={IoIosPricetags}
        />
        <div className="pt-5">{buttonActions}</div>
      </div>
    </form>
  );
};
