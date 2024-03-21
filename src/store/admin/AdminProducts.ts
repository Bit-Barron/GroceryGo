import { proxy } from "valtio";

export type AdminProductsStore = typeof AdminProductsStore;

export const AdminProductsStore = proxy({
  subpage: "list",
  setSubpage: (subpage: "list" | "upsert") => {
    AdminProductsStore.subpage = subpage;
  },

  createdAt: "",
  setCreatedAt: (createdAt: string) => {
    AdminProductsStore.createdAt = createdAt;
  },

  description: "",
  setDescription: (description: string) => {
    AdminProductsStore.description = description;
  },
  status: true,
  setStatus: (status: boolean) => {
    AdminProductsStore.status = status;
  },
  title: "",
  setTitle: (title: string) => {
    AdminProductsStore.title = title;
  },
  smallDescription: "",
  setSmallDescription: (smallDescription: string) => {
    AdminProductsStore.smallDescription = smallDescription;
  },
});
