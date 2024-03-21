import React from "react";
import { LuSubtitles } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { GiCancel } from "react-icons/gi";
import { AiOutlineSave } from "react-icons/ai";
import { Input } from "@/components/ui/input";
import { CgRename } from "react-icons/cg";
import { useSnapshot } from "valtio";
import { AdminCategoryStore } from "@/store/admin/AdminCategory";

interface AdminProductsUpsertProps {}

export const AdminCategoriesUpsert: React.FC<
  AdminProductsUpsertProps
> = ({}) => {
  const adminCategories = useSnapshot(AdminCategoryStore);

  const buttonActions = (
    <div className="flex justify-end space-x-5 text-white">
      <Button type="button" Icon={GiCancel}>
        Cancel
      </Button>
      <Button type="submit" Icon={AiOutlineSave}>
        Save
      </Button>
    </div>
  );

  return (
    <form className="space-y-8 divide-y divide-gray-700 rounded-md bg-container p-5 text-black">
      <div className="space-y-8 divide-y divide-gray-700 sm:space-y-5">
        <div className="space-y-6 sm:space-y-5">
          <div>
            <h3 className="text-lg font-medium leading-6">Category</h3>
            <p className="mt-1 max-w-2xl text-sm ">
              This Information will be displayed publicly
            </p>
          </div>

          <div className="space-y-6 sm:space-y-5">
            <Input
              type="text"
              onChange={(e) => adminCategories.setTitle(e.target.value)}
              value={adminCategories.title}
              Icon={LuSubtitles}
              placeholder={"Title *"}
              name={"title"}
              id={"title"}
            />

            <Input
              type="text"
              onChange={(e) => adminCategories.setDescription(e.target.value)}
              value={adminCategories.description}
              Icon={LuSubtitles}
              placeholder={"Description *"}
              name={"Description"}
              id={"Description"}
            />

            <Input type="file" Icon={CgRename} placeholder={"upload file *"} />
          </div>
        </div>
      </div>
      <div className="pt-5">{buttonActions}</div>
    </form>
  );
};
