import React from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineInbox,
  AiFillHeart,
} from "react-icons/ai";

interface layoutProps {}

const layout: React.FC<layoutProps> = ({}) => {
  return (
    <div className="!bg-white h-screen">
      <div className="fixed bottom-0 left-0 w-full bg-[#E82C3D] text-white p-7 text-center">
        <div className="flex justify-between">
          <div>
            <AiOutlineHome className="scale-150"></AiOutlineHome>
          </div>
          <div>
            <AiOutlineUser className="scale-150"></AiOutlineUser>
          </div>
          <div>
            <AiOutlineInbox className="scale-150"></AiOutlineInbox>
          </div>
          <div>
            <AiFillHeart className="scale-150"></AiFillHeart>
          </div>
        </div>
      </div>
    </div>
  );
};
export default layout;
