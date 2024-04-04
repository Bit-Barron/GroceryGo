import axios from "axios";
import { proxy } from "valtio";

export type AdminMenuStore = typeof AdminMenuStore;

export const AdminMenuStore = proxy({
  createProductMenu: async (productName: string) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_REST_ENDPOINT}/api/createMenu`,
        productName
      );
      console.log(response.data);
      return response;
    } catch (err) {
      console.error(err);
    }
  },
});
