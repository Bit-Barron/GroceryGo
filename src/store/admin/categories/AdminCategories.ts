import { proxy } from "valtio";

export type AdminCategories = typeof AdminCategories;

export const AdminCategories = proxy({
  subpage: "list",
  setSubpage: (subpage: "list" | "upsert") => {
    AdminCategories.subpage = subpage;
  },

  description: "",
  status: true,
  title: "",
  smallDescription: "",
  ingredients: "",
});
