import { FormEvent } from "react";
import { CgRename } from "react-icons/cg";
import { useSnapshot } from "valtio";
import { Input } from "@/components/ui/Input";
import { AiOutlineSave } from "react-icons/ai";
import { AdminCategoryStore } from "@/store/admin/AdminCategory";
import { Button } from "@/components/ui/Button";

interface CategoriesUpsertProps {}

export const CategoriesUpsert: React.FC<CategoriesUpsertProps> = ({}) => {
  const categorieStore = useSnapshot(AdminCategoryStore);

  const buttonActions = (
    <div className="flex justify-end space-x-5">
      <Button type="submit" Icon={AiOutlineSave}>
        Save
      </Button>
    </div>
  );

  return (
    <form
      onSubmit={(e) => categorieStore.createCategories(e as FormEvent)}
      className="space-y-8 divide-y divide-gray-700 rounded-md bg-container p-5 text-white"
    >
      <div className="space-y-8 divide-y divide-gray-700 sm:space-y-5">
        <div className="space-y-6 sm:space-y-5">
          <div>
            <h3 className="text-lg font-medium leading-6">Categories</h3>
            <p className="mt-1 max-w-2xl text-sm ">
              This Information will be displayed publicly
            </p>
          </div>

          <div className="space-y-6 sm:space-y-5">
            <Input
              value={categorieStore.title}
              onChange={(e) => categorieStore.setTitle(e.target.value)}
              type="text"
              Icon={CgRename}
              placeholder={"Categories Title"}
              id={"title"}
              required
              maxLength={20}
            />
            <Input
              value={categorieStore.description}
              onChange={(e) => categorieStore.setDescription(e.target.value)}
              type="text"
              Icon={CgRename}
              placeholder={"Categories Description (optional)"}
              id={"title"}
              maxLength={20}
            />
          </div>
        </div>
      </div>
      <div className="pt-5">{buttonActions}</div>
    </form>
  );
};
