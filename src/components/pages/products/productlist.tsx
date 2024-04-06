import React, { useEffect } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { useSnapshot } from "valtio";
import { CldImage } from "next-cloudinary";
import { AdminProductsStore } from "@/store/admin/AdminProducts";
import { ProductsProps } from "@/types/interface";
import { MdDelete } from "react-icons/md";
import { Button } from "@/components/ui/Button";
import { MdOutlineDiscount } from "react-icons/md";
import { IoPricetag } from "react-icons/io5";
import { TbFileDescription } from "react-icons/tb";

interface ProductsListProps {}

export const ProductsList: React.FC<ProductsListProps> = ({}) => {
  const productStore = useSnapshot(AdminProductsStore);

  useEffect(() => {
    productStore.getProductById();
  }, [productStore]);

  return (
    <>
      <div className="">
        {productStore.product.map((product: ProductsProps, idx) => (
          <div
            key={idx}
            className="bg-container block cursor-pointer mt-10 hover:!bg-neutral-900"
          >
            <div className={`px-4 py-4 sm:px-6`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <p className="truncate font-medium">{product.title}</p>
                </div>
                <p
                  className={
                    "inline-flex rounded-full px-2 text-xs font-semibold leading-5 text-white"
                  }
                >
                  {product.title || "no title"}
                </p>
              </div>
              <div className="flex flex-col md:flex md:flex-row md:items-end md:justify-between mt-2">
                <div className="order-1 text-sm text-gray-400 space-y-2">
                  <p className="flex items-center space-x-1">
                    <TbFileDescription className="" />
                    <span>description: </span>
                    <span className="">
                      {product.description || "product description"}
                    </span>
                  </p>
                  <p className="flex items-center space-x-1">
                    <IoPricetag className="font-bold" />
                    <span>price: </span>
                    <span className="font-bold">
                      {product.price || "no price selected"}€
                    </span>
                  </p>

                  <p className="flex items-center space-x-1">
                    <BiCategoryAlt className="text-maine" />
                    <span>category: </span>
                    <span className="font-bold">
                      {product.category || "no category selected"}
                    </span>
                  </p>

                  <p className="flex items-center space-x-1">
                    <MdOutlineDiscount className="text-main" />
                    <span>discount: </span>
                    <span className="font-bold">
                      {product.discount || "0%"}
                    </span>
                  </p>

                  <p className="flex items-center space-x-1">
                    <TbFileDescription className="text-main" />
                    <span>small description </span>
                    <span className="font-bold">
                      {product.smallDescription || "no small description"}
                    </span>
                  </p>

                  {product.imageId && (
                    <p className="flex items-center space-x-1">
                      <CldImage
                        alt={"Product Image"}
                        src={product.imageId}
                        width={100}
                        height={100}
                        className="rounded-md w-20 h-20 object-cover"
                      />
                    </p>
                  )}

                  <div
                    onClick={() => {
                      productStore.deleteProductById(product.id as number);
                    }}
                  >
                    <MdDelete className="text-xl font-bold text-red-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
