import React, { useEffect } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { useSnapshot } from "valtio";
import { CldImage } from "next-cloudinary";
import { AdminProductsStore } from "@/store/admin/AdminProducts";
import { ProductsProps } from "@/types/interface";
import { RiUserAddFill, RiUserSettingsLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { Button } from "@/components/ui/button";

interface ProductsListProps {}

export const ProductsList: React.FC<ProductsListProps> = ({}) => {
  const productStore = useSnapshot(AdminProductsStore);

  useEffect(() => {
    productStore.getProductById();
  }, [productStore]);

  return (
    <>
      <div>
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
                  {product.title}
                </p>
              </div>
              <div className="flex flex-col md:flex md:flex-row md:items-end md:justify-between mt-2">
                <div className="order-1 text-sm text-gray-400 space-y-2">
                  <p className="flex items-center space-x-1">
                    <RiUserAddFill className="text-main" />
                    <span>description: </span>
                    <span className="text-white">{product.description}</span>
                  </p>
                  <p className="flex items-center space-x-1">
                    <RiUserSettingsLine className="text-main" />
                    <span>price: </span>
                    <span>{product.price}€</span>
                  </p>

                  <p className="flex items-center space-x-1">
                    <BiCategoryAlt className="text-main" />
                    <span>category: </span>
                    <span>{product.category}</span>
                  </p>

                  <p className="flex items-center space-x-1">
                    <BiCategoryAlt className="text-main" />
                    <span>discount: </span>
                    <span>{product.discount || "0%"}</span>
                  </p>

                  <p className="flex items-center space-x-1">
                    <BiCategoryAlt className="text-main" />
                    <span>small description </span>
                    <span>{product.smallDescription}</span>
                  </p>

                  <p className="flex items-center space-x-1">
                    <CldImage
                      alt={"Product Image"}
                      src={product.imageId}
                      width={100}
                      height={100}
                    />
                  </p>
                  <Button
                    Icon={MdDelete}
                    onClick={() =>
                      productStore.deleteProductById(product.id as number)
                    }
                  >
                    Löschen
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
