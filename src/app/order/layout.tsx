import React from "react";
import { AiOutlineHome, AiFillHeart } from "react-icons/ai";
import { CiShoppingBasket } from "react-icons/ci";
import { MdDiscount } from "react-icons/md";

interface layoutProps {
  children: React.ReactNode;
}

const layout: React.FC<layoutProps> = ({ children }) => {
  return <div>{children}</div>;
};
export default layout;
