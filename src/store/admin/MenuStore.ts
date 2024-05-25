import axios from "axios";
import { proxy } from "valtio";
import cookie from "cookie";
import { toast } from "sonner";

export type AdminMenuStore = typeof AdminMenuStore;

export type ProductDataProps = {
  productName: string;
  productPrice: number;
  productDescription: string;
  productCategory: string;
  userId: number;
  id?: number;
};

export const AdminMenuStore = proxy({
  createMenu: async ({
    productName,
    productCategory,
    productDescription,
    productPrice,
    userId,
  }: ProductDataProps) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_REST_ENDPOINT}/api/createMenu`,
        {
          productName,
          productCategory,
          productDescription,
          productPrice: `${productPrice}€`,
          userId,
        }
      );

      toast.success("Menu created successfully");
      return response;
    } catch (err) {
      console.error(err);
    }
  },

  menuData: [] as ProductDataProps[],
  setMenuData: (data: ProductDataProps[]) => {
    AdminMenuStore.menuData = data;
  },

  subpage: "menu" as string,

  getMenuById: async () => {
    try {
      const getUserId = cookie.parse(document.cookie);
      const userId = getUserId["userId"];
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_REST_ENDPOINT}/api/getMenuById/${userId}`
      );

      AdminMenuStore.setMenuData(response.data);
    } catch (err) {
      console.error(err);
    }
  },

  deleteMenuById: async (id: number) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_REST_ENDPOINT}/api/deleteMenuById/${id}`
      );
      AdminMenuStore.getMenuById();
      window.location.reload();
      toast.success("Menu deleted successfully");
    } catch (err) {
      console.error(err);
    }
  },

  imageId: "",
  setImageId: (imageId: string) => {
    AdminMenuStore.imageId = imageId;
  },

  updateMenu: async (id: string) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_REST_ENDPOINT}/api/updateMenuById`,
        {
          imageId: AdminMenuStore.imageId,
          id: id,
        }
      );
      console.error(response.data);
      toast.success("Menu updated successfully");
      return response;
    } catch (err) {
      console.error(err);
    }
  },
});
