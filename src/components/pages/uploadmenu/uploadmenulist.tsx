import React, { useEffect } from "react";
import { useSnapshot } from "valtio";
import { TbFileDescription } from "react-icons/tb";
import { AdminMenuStore } from "@/store/admin/AdminMenu";
import { ProductDataProps } from "@/store/admin/AdminMenu";
import { MdDelete } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { IoPricetag } from "react-icons/io5";

interface UploadMenuListProps {}

export const UploadMenuList: React.FC<UploadMenuListProps> = ({}) => {
  const adminMenuStore = useSnapshot(AdminMenuStore);

  useEffect(() => {
    adminMenuStore.getMenuById();
  }, [adminMenuStore]);

  return (
    <div className="">
      {adminMenuStore.menuData.map((menu: ProductDataProps, idx) => (
        <div
          key={idx}
          className="bg-container block cursor-pointer mt-10 hover:!bg-neutral-900"
        >
          <div className={`px-4 py-4 sm:px-6`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <p className="truncate font-medium">{menu.productName}</p>
              </div>
              <p
                className={
                  "inline-flex rounded-full px-2 text-xs font-semibold leading-5 text-white"
                }
              >
                {menu.productDescription || "no title"}
              </p>
            </div>
            <div className="flex flex-col md:flex md:flex-row md:items-end md:justify-between mt-2">
              <div className="order-1 text-sm text-gray-400 space-y-2">
                <p className="flex items-center space-x-1 text-white">
                  <TbFileDescription className="text-main text-white font-bold" />
                  <span>description: </span>
                  <span className="">
                    {menu.productDescription || "menu description"}
                  </span>
                </p>
                <p className="flex items-center space-x-1 text-green-600">
                  <IoPricetag className="font-bold" />
                  <span>price: </span>
                  <span className="font-bold">
                    {menu.productPrice || "no price selected"}
                  </span>
                </p>

                <p className="flex items-center space-x-1 text-blue-700">
                  <BiCategoryAlt className="text-main" />
                  <span>category: </span>
                  <span className="font-bold">
                    {menu.productCategory || "no category selected"}
                  </span>
                </p>

                <div onClick={() => {}}>
                  <MdDelete
                    className="text-xl text-red-500 font-bold"
                    onClick={() =>
                      adminMenuStore.deleteMenuById(menu.id as number)
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
