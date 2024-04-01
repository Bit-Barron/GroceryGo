import { FormEvent } from "react";
import { proxy } from "valtio";
import axios from "axios";
import { toast } from "sonner";

export type AdminMenu = typeof AdminMenu;

export const AdminMenu = proxy({
  subpage: "list",
  setSubpage: (subpage: "list" | "upsert") => {
    AdminMenu.subpage = subpage;
  },

  product: [],
  setProduct: (product: any) => {
    AdminMenu.product = product;
  },

  createProduct: [],
  setCreateProduct: (createProduct: any) => {
    AdminMenu.createProduct = createProduct;
  },

  price: "",
  setPrice: (price: string) => {
    AdminMenu.price = price;
  },

  discount: "",
  setDiscount: (discount: string) => {
    AdminMenu.discount = discount;
  },

  createdAt: "",
  setCreatedAt: (createdAt: string) => {
    AdminMenu.createdAt = createdAt;
  },

  description: "",
  setDescription: (description: string) => {
    AdminMenu.description = description;
  },

  title: "",
  setTitle: (title: string) => {
    AdminMenu.title = title;
  },

  categories: "",
  setCategories: (categories: string) => {
    AdminMenu.categories = categories;
  },

  createMenue: async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products`,
        {
          title: AdminMenu.title,
          description: AdminMenu.description,
          price: AdminMenu.price,
          discount: AdminMenu.discount,
          categories: AdminMenu.categories,
        }
      );

      toast.success("Menu created successfully");
    } catch (error) {
      toast.error("Menu creation failed");
      console.error(error);
    }
  },
});
