import { FormEvent } from "react";
import { proxy } from "valtio";
import axios from "axios";
import cookie from "cookie";
import { toast } from "sonner";

export type AdminProductsStore = typeof AdminCategoryStore;

export const AdminCategoryStore = proxy({
  subpage: "list",
  setSubpage: (subpage: "list" | "upsert") => {
    AdminCategoryStore.subpage = subpage;
  },
  createdAt: "",
  setCreatedAt: (createdAt: string) => {
    AdminCategoryStore.createdAt = createdAt;
  },
  title: "",
  setTitle: (title: string) => {
    AdminCategoryStore.title = title;
  },
  description: "",
  setDescription: (description: string) => {
    AdminCategoryStore.description = description;
  },
  image: "",
  setImage: (image: string) => {
    AdminCategoryStore.image = image;
  },

  createCategories: async (e: FormEvent) => {
    e.preventDefault();

    const cookies = cookie.parse(document.cookie);
    const userId = cookies["userId"];

    try {
      const categories = await axios.post(
        `${process.env.NEXT_PUBLIC_REST_ENDPOINT}/api/createCategories`,
        {
          title: AdminCategoryStore.title,
          description: AdminCategoryStore.description,
          image: AdminCategoryStore.image,
          userId,
        }
      );

      toast.success("Category Created Successfully");
      return categories;
    } catch (err) {
      toast.error("Error Creating Category");
      console.error(err);
    }
  },
});
