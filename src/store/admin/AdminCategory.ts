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
  image: "",
  setImage: (image: string) => {
    AdminCategoryStore.image = image;
  },
});
