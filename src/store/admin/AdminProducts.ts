import { FormEvent } from "react";
import { proxy } from "valtio";
import axios from "axios";
import cookie from "cookie";
import { toast } from "sonner";

export type AdminProductsStore = typeof AdminProductsStore;

export const AdminProductsStore = proxy({
  subpage: "upsert",
  setSubpage: (subpage: "list" | "upsert") => {
    AdminProductsStore.subpage = subpage;
  },

  product: [],
  setProduct: (product: any) => {
    AdminProductsStore.product = product;
  },

  price: "",
  setPrice: (price: string) => {
    AdminProductsStore.price = price;
  },

  imageId: "",
  setImageId: (imageId: string) => {
    AdminProductsStore.imageId = imageId;
  },

  discount: "",
  setDiscount: (discount: string) => {
    AdminProductsStore.discount = discount;
  },

  createdAt: "",
  setCreatedAt: (createdAt: string) => {
    AdminProductsStore.createdAt = createdAt;
  },

  description: "",
  setDescription: (description: string) => {
    AdminProductsStore.description = description;
  },

  title: "",
  setTitle: (title: string) => {
    AdminProductsStore.title = title;
  },
  smallDescription: "",
  setSmallDescription: (smallDescription: string) => {
    AdminProductsStore.smallDescription = smallDescription;
  },

  categories: "",
  setCategories: (categories: string) => {
    AdminProductsStore.categories = categories;
  },

  createProduct: async (e: FormEvent) => {
    e.preventDefault();

    const getToken = cookie.parse(document.cookie);
    const userId = getToken["userId"];

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_REST_ENDPOINT}/api/createProduct`,
        {
          imageId: AdminProductsStore.imageId,
          price: AdminProductsStore.price,
          discount: AdminProductsStore.discount,
          userId: userId,
          createdAt: new Date().toISOString(),
          description: AdminProductsStore.description,
          title: AdminProductsStore.title,
          smallDescription: AdminProductsStore.smallDescription,
          category: AdminProductsStore.categories,
        }
      );

      window.location.reload();
      return toast.success("Product created");
    } catch (err) {
      return toast.error("An error occured");
    }
  },

  getProductById: async () => {
    const getUserId = cookie.parse(document.cookie);
    const id = getUserId["userId"];

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_REST_ENDPOINT}/api/getProductsById/${id}`
      );

      AdminProductsStore.setProduct(response.data);
      return response;
    } catch (err) {
      console.error(err);
    }
  },

  deleteProductById: async (id: number) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_REST_ENDPOINT}/api/deleteProductById/${id}`
      );

      window.location.reload();

      return toast.success("Product deleted");
    } catch (err) {
      console.error(err);
      return toast.error("An error occured");
    }
  },
});
