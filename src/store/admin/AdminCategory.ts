import { proxy } from "valtio";

interface AdminCategoryProps {}

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
});
