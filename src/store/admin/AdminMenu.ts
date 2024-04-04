import axios from "axios";
import { proxy } from "valtio";

export type AdminMenuStore = typeof AdminMenuStore;

export type ProductDataProps = {
  productName: string;
  productPrice: number;
  productDescription: string;
  productCategory: string;
  userId: number;
};

export const AdminMenuStore = proxy({
  createProductMenu: async ({
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
          productPrice,
          userId,
        }
      );
      console.log(response.data);
      return response;
    } catch (err) {
      console.error(err);
    }
  },
});
