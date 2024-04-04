import React from "react";
import { AiOutlineHome, AiFillHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { MdDiscount } from "react-icons/md";
import { CiShoppingBasket } from "react-icons/ci";

interface layoutProps {
  children: React.ReactNode;
}

const layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <div className="">
      <div className="fixed bottom-0 w-full p-5 bg-[#008000] text-white text-center">
        <div className="flex justify-between p-2">
          <div>
            <AiOutlineHome className="scale-150" />
          </div>
          <div>
            <MdDiscount className="scale-150" />
          </div>
          <div>
            <AiFillHeart className="scale-150" />
          </div>
          <div>
            <CiShoppingBasket className="scale-150" />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
export default layout;
