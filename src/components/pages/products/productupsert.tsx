import { Toaster, toast } from "sonner";
import axios from "axios";
import { AdminProductsStore } from "@/store/admin/AdminProducts";
import React, { FormEvent } from "react";
import { useSnapshot } from "valtio";
import cookie from "cookie";
import { DataTable } from "@/components/elements/products/table";
import { columns } from "@/components/elements/products/columns";

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

      if (response) {
        toast.success("Product created");
        return response;
      }
    } catch (err) {
      toast.error("An error occured");
    }
  };

  return (
    <form onSubmit={(e) => createProduct(e)}>
      <Toaster />
      <div>ProductsUpsert</div>
    </form>
  );
};
