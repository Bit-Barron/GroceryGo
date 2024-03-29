import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { mockData } from "@/lib/mockData";

interface AdminOrdersProps {}

export const AdminOrders: React.FC<AdminOrdersProps> = ({}) => {
  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-cardBackground border-cardBorder overflow-scroll ">
      <h1 className="text-white">Recent Orders</h1>
      {mockData.map((order, id) => (
        <li
          key={id}
          className="bg-[#14161b] hover:bg-[#0d0e12] rounded-lg my-3 p-2 flex items-center cursor-pointer"
        >
          <div className="bg-green-200 rounded-lg p-3">
            <FaShoppingBag className="text-purple-800 " />
          </div>
          <div className="pl-4">
            <p className="text-whitefont-bold">${order.total}</p>
            <p className="text-gray-400 text-sm">{order.name.first}</p>
          </div>
          <p className="lg:flex md:hidden absolute right-6 text-sm">
            {order.date}
          </p>
        </li>
      ))}
    </div>
  );
};
