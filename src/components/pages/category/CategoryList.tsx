import { AdminCategoryStore } from "@/store/admin/CategoryStore";
import { CategoriesProps } from "@/types/interface";
import { format } from "date-fns";
import { useSnapshot } from "valtio";
import React, { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { TbFileDescription } from "react-icons/tb";

interface CategoriesListProps {}

export const CategoriesList: React.FC<CategoriesListProps> = ({}) => {
  const categoriesStore = useSnapshot(AdminCategoryStore);

  useEffect(() => {
    categoriesStore.getCategoriesById();
  }, [categoriesStore]);

  return (
    <div>
      <div className="">
        {categoriesStore.category.map((categories: CategoriesProps, idx) => (
          <div
            key={idx}
            className="bg-container block cursor-pointer mt-10 hover:!bg-neutral-900"
          >
            <div className={`px-4 py-4 sm:px-6`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <p className="truncate font-medium">{categories.title}</p>
                </div>
                <p
                  className={
                    "inline-flex rounded-full px-2 text-xs font-semibold leading-5 text-white"
                  }
                >
                  {categories.title || "No Title"}
                </p>
              </div>
              <div className="flex flex-col md:flex md:flex-row md:items-end md:justify-between mt-2">
                <div className="order-1 text-sm text-gray-400 space-y-2">
                  <p className="flex items-center space-x-1">
                    <TbFileDescription className="text-main" />
                    <span>Description: </span>
                    <span className="">
                      {categories.description || "No Description"}
                    </span>
                  </p>
                  <p className="flex items-center space-x-1">
                    <span>Created At: </span>
                    <span className="font-bold">
                      <time dateTime={categories.createdAt}>
                        {format(categories.createdAt, "LLLL d, yyyy")}
                      </time>
                    </span>
                  </p>

                  <div
                    onClick={() => {
                      categoriesStore.deleteCategoriesById(categories.id);
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
    </div>
  );
};
