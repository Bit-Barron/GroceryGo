import { FormEvent } from "react";
import { proxy } from "valtio";
import axios from "axios";
import cookie from "cookie";
import { toast } from "sonner";

export type AdminProductsStore = typeof AdminCategoryStore;

export const AdminCategoryStore = proxy({
  subpage: "upsert",
  setSubpage: (subpage: "list" | "upsert") => {
    AdminCategoryStore.subpage = subpage;
  },

  category: [],
  setCategory: (category: never[]) => {
    AdminCategoryStore.category = category;
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
          userId,
        }
      );

      console.log(categories.data)

      window.location.reload();
      toast.success("Category Created Successfully");
      return categories;
    } catch (err) {
      toast.error("Error Creating Category");
      console.error(err);
    }
  },

  getCategoriesById: async () => {
    const cookies = cookie.parse(document.cookie);
    const userId = cookies["userId"];

    try {
      const categories = await axios.get(
        `${process.env.NEXT_PUBLIC_REST_ENDPOINT}/api/getCategoriesById/${userId}`
      );

      AdminCategoryStore.setCategory(categories.data);

      return categories;
    } catch (err) {
      console.error(err);
    }
  },

  deleteCategoriesById: async (id: number) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_REST_ENDPOINT}/api/deleteCategoriesById/${id}`
      );

      window.location.reload();

      return toast.success("Category Deleted Successfully");
    } catch (err) {
      toast.error("Error Deleting Category");
      console.error(err);
    }
  },
});
