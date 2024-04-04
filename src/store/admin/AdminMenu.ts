import axios from "axios";
import { proxy } from "valtio";
import cookie from "cookie";

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
      console.log(response.data);
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
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  },

  deleteMenuById: async (id: number) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_REST_ENDPOINT}/api/deleteMenuById/${id}`
      );
      console.log(response.data);
      AdminMenuStore.getMenuById();
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  },
});
