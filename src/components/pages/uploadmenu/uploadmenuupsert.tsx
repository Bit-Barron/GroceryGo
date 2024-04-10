import React, { useState } from "react";
import cookie from "cookie";
import { toast } from "sonner";
import axios from "axios";
import { Button } from "@/components/ui/Button";
import { AiOutlineSave } from "react-icons/ai";
import { Input } from "@/components/ui/Input";
import { useSnapshot } from "valtio";
import { AdminMenuStore } from "@/store/admin/AdminMenu";

interface UploadMenuUpsertProps {}

export const UploadMenuUpsert: React.FC<UploadMenuUpsertProps> = ({}) => {
  const adminMenuStore = useSnapshot(AdminMenuStore);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const buttonActions = (
    <div className="flex justify-end space-x-5 p-1.5 border-gray-700">
      <Button type="submit" Icon={AiOutlineSave}>
        Save
      </Button>
    </div>
  );


  async function uploadMenu() {
    setLoading(true);
    const getUserId = cookie.parse(document.cookie);
    const userId = getUserId["userId"];

    const data = {
      url: "https://cdn.discordapp.com/attachments/1220880200448081952/1225330206844129340/WhatsApp_Bild_2024-04-02_um_11.21.50_9ae89261.jpg?ex=6620bcae&is=660e47ae&hm=6fa9feb5e971df719224628fcff612e9e992a10b9fa60bed20b790645a2cd0b7&",
      question:
        'Give the prices, category, description and product in a json, format it like that {"products": [{"category":"","name":"","price", "description": FLOAT}]}. dont set a code block around it, just send it as a json string.',
      restaurantId: userId,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/image/vision",
        data
      );

      const responseData = JSON.parse(response.data.response);

      if (!responseData.products) {
        toast.error("Error: No products found in the image");
        return;
      }

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
      toast.success("Menu Uploaded Successfully");
    } catch (error) {
      toast.error("Error: Menu not uploaded");
      console.error("Error: ", error);
    } finally {
      setLoading(false);
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
            <Input
              type="file"
              onChange={(e) =>
                e.target.files && setUploadFile(e.target.files[0])
              }
            />
            <Button onClick={() => uploadMenu()}>{loading ? 'Loading...' : 'Upload Menu'}</Button>
          </div>
        </div>
      </div>
      <div className="pt-5">{buttonActions}</div>
    </section>
  );
};
