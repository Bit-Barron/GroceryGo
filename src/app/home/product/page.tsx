"use client";

import { CldImage } from "next-cloudinary";
import cookie from "cookie";
import { useEffect } from "react";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { useSnapshot } from "valtio";
import { AdminProductsStore } from "@/store/admin/AdminProducts";
import { ProductsProps } from "@/types/interface";
import { Card, CardContent } from "@/components/ui/elements/Card";
import { TiPlus } from "react-icons/ti";


interface pageProps {}

const Page: React.FC<pageProps> = ({}) => {
  const productStore = useSnapshot(AdminProductsStore);

  useEffect(() => {
    const extractParamsAndSaveAsCookies = () => {
      const url = new URL(window.location.href);
      const tablenumber = url.searchParams.get("tablenumber");
      const restaurantid = url.searchParams.get("restaurantid");

      if (tablenumber && restaurantid) {
        document.cookie = cookie.serialize("tablenumber", tablenumber);
        document.cookie = cookie.serialize("restaurantid", restaurantid);
      }

      url.searchParams.delete("tablenumber");
      url.searchParams.delete("restaurantid");
      const cleanedURL = url.toString();

      window.location.href = cleanedURL;
    };

    if (location.search) {
      extractParamsAndSaveAsCookies();
    }
  }, []);

  useEffect(() => {
    productStore.getProductById();
  }, [productStore]);



  return (
    <div className="!bg-white h-screen">
      <form className="max-w-md mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <CiSearch className="text-black text-xl" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Products"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <div className="!text-black grid grid-cols-2 gap-5">
        {productStore.product.map((product: ProductsProps) => {
          return (
          <div key={product.id} className="mt-6">
            <Card className="bg-white h-72">
              <CardContent className="">
                {product.imageId && (
                  <p className="flex items-center space-x-1 mt-6 justify-center mx-auto">
                    <CldImage
                      alt={"Product Image"}
                      src={product.imageId}
                      className="w-40 h-40 object-cover !rounded-2xl"
                      width={200}
                      height={200}
                    />
                  </p>
                )}
                <div className="font-semibold text-lg mt-2">
                  {product.title}
                </div>
                <div className="text-gray-500">{product.category}</div>
                <div className="flex justify-between">
                  <div className="mt-1">{product.price}€</div>
                  <div className="bg-blue-700 rounded-full p-2">
                    <TiPlus className="text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          )
        }
        )}
      </div>
    </div>
  );
};

export default Page;
