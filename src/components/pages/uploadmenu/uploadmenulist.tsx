import React, { useEffect } from "react";
import { useSnapshot } from "valtio";
import { CldImage } from "next-cloudinary";
import { TbFileDescription } from "react-icons/tb";
import { AdminMenuStore } from "@/store/admin/MenuStore";
import { ProductDataProps } from "@/store/admin/MenuStore";
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
      {adminMenuStore.imageId && (
        <CldImage
          alt={"Product Image"}
          src={adminMenuStore.imageId}
          width={100}
          height={100}
        />
      )}
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
                {menu.productDescription || "No Title"}
              </p>
            </div>
            <div className="flex flex-col md:flex md:flex-row md:items-end md:justify-between mt-">
              <div className="order-1 text-sm text-gray-400 space-y-2">
                <p className="flex items-center space-x-1">
                  <TbFileDescription className="text-main font-bold" />
                  <span className="text-gray-400">Description: </span>
                  <span className="">
                    {menu.productDescription || "No Description"}
                  </span>
                </p>
                <p className="flex items-center space-x-1">
                  <IoPricetag className="font-bold" />
                  <span>Price: </span>
                  <span className="font-bold">
                    {menu.productPrice || "No Price"}
                  </span>
                </p>

                <p className="flex items-center space-x-1">
                  <BiCategoryAlt className="text-main" />
                  <span>Category: </span>
                  <span className="font-bold">
                    {menu.productCategory || "No Category"}
                  </span>
                </p>

                <div className="flex">
                  <MdDelete
                    className="text-xl font-bold text-red-500"
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
