import { proxy } from "valtio";

interface AdminCategoriesStoreProps {
  subpage: "list" | "upsert";
}

export type AdminCategories = typeof AdminCategories;

export const AdminCategories: AdminCategoriesStoreProps = proxy({
  subpage: "list" | "upsert",
});
