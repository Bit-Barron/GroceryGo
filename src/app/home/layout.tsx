"use client";

import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { MdDiscount } from "react-icons/md";
import { CiShoppingBasket } from "react-icons/ci";
import { BiCategoryAlt } from "react-icons/bi";

interface layoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<layoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <div className="!bg-[#F4F6F6] !h-screen">
      <div className="fixed bottom-0 mt-6 w-full p-5 bg-blue-700 text-white text-center">
        <div className="flex justify-between p-2">
          <div>
            <AiOutlineHome
              className="scale-150"
              onClick={() => router.push("/home/product")}
            />
          </div>
          <div>
            <MdDiscount
              className="scale-150"
              onClick={() => router.push("/home/discount")}
            />
          </div>
          <div>
            <BiCategoryAlt
              className="scale-150"
              onClick={() => router.push("/home/category")}
            />
          </div>
          <div>
            <CiShoppingBasket
              className="scale-150"
              onClick={() => router.push("/home/order")}
            />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
export default Layout;
