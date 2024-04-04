import React, { useState } from "react";
import cookie from "cookie";
import { toast } from "sonner";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { AiOutlineSave } from "react-icons/ai";
import { Input } from "@/components/ui/input";
import { useSnapshot } from "valtio";
import { AdminMenuStore } from "@/store/admin/AdminMenu";

interface UploadMenuUpsertProps {}

export const UploadMenuUpsert: React.FC<UploadMenuUpsertProps> = ({}) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const adminMenuStore = useSnapshot(AdminMenuStore);

  const buttonActions = (
    <div className="flex justify-end space-x-5 p-1.5 border-gray-700">
      <Button type="submit" Icon={AiOutlineSave}>
        Save
      </Button>
    </div>
  );

  async function uploadMenu() {
    const getUserId = cookie.parse(document.cookie);
    const userId = getUserId["userId"];

    const data = {
      url: "https://cdn.discordapp.com/attachments/1225089995027513344/1225092666950418612/WhatsApp_Bild_2024-04-02_um_09.59.57_0da00050.jpg?ex=661fdf74&is=660d6a74&hm=9f2de5aa68f4c6408cbe4b41f65a825bd1bdb3cdc9cc695564b47d1a0e5587a2&",
      question:
        'Give the prices, category, description and product in a json, format it like that {"products": [{"category":"","name":"","price", "description": FLOAT}]}. dont set a code block around it, just send it as a json string.',
      restaurantId: userId,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/image/vision",
        data
      );
      if (!response.data || !response.data[0] || !response.data[0].response) {
        console.error("Error: Response data not in the expected format");
        return;
      }

      const responseData = JSON.parse(response.data[0].response);

      const formattedData = {
        products: responseData.products.map((product: any) => ({
          category: product.category,
          name: product.name,
          price: parseFloat(product.price),
          description: product.description,
        })),
      };

      const getProductName = formattedData.products.map(
        (item: any) => item.name
      );

      const getProductData = formattedData.products.map((item: any) => ({
        productName: item.name,
        productPrice: item.price,
        productDescription: item.description,
        productCategory: item.category,
      }));

      for (let i = 0; i < getProductName.length; i++) {
        adminMenuStore.createMenu({
          productName: getProductData[i].productName,
          productPrice: getProductData[i].productPrice,
          productDescription: getProductData[i].productDescription,
          productCategory: getProductData[i].productCategory,
          userId: parseInt(userId),
        });
      }
      return toast.success("Menu Uploaded Successfully");
    } catch (error) {
      toast.error("Error: Menu not uploaded");
      console.error("Error: ", error);
    }
  }

  return (
    <section className="space-y-8 divide-y divide-gray-700 rounded-md bg-container p-5 text-white">
      <div className="space-y-8 divide-y divide-gray-700 sm:space-y-5">
        <div className="space-y-6 sm:space-y-5">
          <div>
            <h3 className="text-lg font-medium leading-6">Menu</h3>
            <p className="mt-1 max-w-2xl text-sm ">
              This Information will be displayed publicly
            </p>
          </div>

          <div className="space-y-6 sm:space-y-5">
            <Input type="file" />
            <Button onClick={() => uploadMenu()}>Upload Menu</Button>
          </div>
        </div>
      </div>
      <div className="pt-5">{buttonActions}</div>
    </section>
  );
};
