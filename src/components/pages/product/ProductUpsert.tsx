import { AdminProductsStore } from "@/store/admin/AdminProducts";
import cookie from "cookie";
import { toast } from "sonner";
import axios from "axios";
import { buttonVariants } from "@/components/ui/elements/Button";
import React, { FormEvent, useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import { CgRename } from "react-icons/cg";
import { Input } from "@/components/ui/elements/Input";
import { FaDollarSign } from "react-icons/fa";
import { MdOutlineDiscount } from "react-icons/md";
import { AiOutlineSave } from "react-icons/ai";
import { Button } from "@/components/ui/elements/Button";
import { PiSubtitles } from "react-icons/pi";
import { CldImage, CldUploadButton } from "next-cloudinary";
import { cn } from "@/lib/utils";
import { Dropdown } from "@/components/ui/elements/Dropdown";
import { CategoriesProps } from "@/types/interface";

interface ProductsProps {}

type uploadProductType = {
  result: {
    info: {
      public_id: string;
    };
  };
};

export const ProductsUpsert: React.FC<ProductsProps> = ({}) => {
  const productStore = useSnapshot(AdminProductsStore);
  const [categories, setCategories] = useState<CategoriesProps[]>([]);

  const buttonActions = (
    <div className="flex justify-end space-x-5">
      <Button type="submit" Icon={AiOutlineSave}>
        Save
      </Button>
    </div>
  );

  useEffect(() => {
    const getCategory = async () => {
      try {
        const getUserId = cookie.parse(document.cookie);
        const id = getUserId["userId"];

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_REST_ENDPOINT}/api/getCategoriesById/${id}`
        );

        setCategories(response.data);
        return response;
      } catch (err) {
        toast.error("An error occured");
      }
    };
    getCategory();
  }, []);

  return (
    <form
      onSubmit={(e) => productStore.createProduct(e as FormEvent)}
      className="space-y-8 divide-y divide-gray-700 rounded-md bg-container p-5 text-white"
    >
      <div className="space-y-8 divide-y divide-gray-700 sm:space-y-5">
        <div className="space-y-6 sm:space-y-5">
          <div>
            <h3 className="text-lg font-medium leading-6">Product</h3>
            <p className="mt-1 max-w-2xl text-sm ">
              This Information will be displayed publicly
            </p>
          </div>
          {productStore.imageId && (
            <CldImage
              alt={"Product Image"}
              src={productStore.imageId}
              width={100}
              height={100}
            />
          )}

          <div className="space-y-6 sm:space-y-5">
            <Input
              value={productStore.title}
              onChange={(e) => productStore.setTitle(e.target.value)}
              type="text"
              Icon={PiSubtitles}
              placeholder={"Product Title"}
              id={"title"}
              name={"title"}
              required
              maxLength={20}
            />

            <Input
              value={productStore.description}
              onChange={(e) => productStore.setDescription(e.target.value)}
              type="text"
              Icon={CgRename}
              placeholder={"Product Description"}
              name={"description"}
              id={"description"}
              maxLength={100}
            />

            <Input
              type="number"
              value={`${productStore.price}`}
              onChange={(e) => productStore.setPrice(e.target.value)}
              Icon={FaDollarSign}
              placeholder={"Product Price (just the number without €)"}
              name={"price"}
              id={"price"}
              required
            />

            <CldUploadButton
              className={cn(buttonVariants({}))}
              uploadPreset="w64a5icc"
              onSuccess={(result: any) =>
                productStore.setImageId(result.info.public_id)
              }
              onError={() => toast.error("An error occured")}
            >
              Upload image for the product
            </CldUploadButton>
          </div>
        </div>

        <div className="space-y-3 pt-8 sm:space-y-5 sm:pt-10">
          <div>
            <h3 className="text-lg font-medium leading-6 ">Categories</h3>
            <p className="mt-1 max-w-2xl">
              Specify Categories the product belongs to.
            </p>
          </div>
          <Dropdown
            label={""}
            onChange={(value) => productStore.setCategories(value as string)}
            values={categories.map((c) => ({ title: c.title }))}
            value={productStore.categories || ""}
          />
        </div>
        <div className="space-y-3 pt-8 sm:space-y-5 sm:pt-10">
          <div>
            <h3 className="text-lg font-medium leading-6">Discounts</h3>
            <p className="mt-1 max-w-2xl">
              Specify Discounts the product belongs to.
            </p>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <Input
              type={"text"}
              placeholder={"Product Discount (optional)"}
              value={productStore.discount}
              name={"promo code"}
              Icon={MdOutlineDiscount}
              id={"promo code"}
              onChange={(e) => productStore.setDiscount(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="pt-5">{buttonActions}</div>
    </form>
  );
};
