import { FormEvent } from "react";
import { Toaster } from "sonner";
import { CgRename } from "react-icons/cg";
import axios from "axios";
import { toast } from "sonner";
import { useSnapshot } from "valtio";
import { Input } from "@/components/ui/input";
import { AiOutlineSave } from "react-icons/ai";
import { AdminCategoryStore } from "@/store/admin/AdminCategory";
import { Button } from "@/components/ui/button";
import cookie from "cookie";

interface CategoriesUpsertProps {}

export const CategoriesUpsert: React.FC<CategoriesUpsertProps> = ({}) => {
  const categorieStore = useSnapshot(AdminCategoryStore);

  console.log();

  const createCategorie = async (e: FormEvent) => {
    e.preventDefault();

    const getToken = cookie.parse(document.cookie);
    const userId = getToken["userId"];

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_REST_ENDPOINT}/api/createCategory`,
        {
          title: categorieStore.title,
          description: categorieStore.description,
          userId: userId,
        }
      );
      console.log(response);
      toast.success("Categorie created");
    } catch (err) {
      toast.error("An error occured");
    }
  };

  const buttonActions = (
    <div className="flex justify-end space-x-5">
      <Button type="submit" Icon={AiOutlineSave}>
        Save
      </Button>
    </div>
  );

  return (
    <form
      onSubmit={createCategorie}
      className="space-y-8 divide-y divide-gray-700 rounded-md bg-container p-5 text-white"
    >
      <Toaster position="top-right" />
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
              value={categorieStore.title}
              onChange={(e) => categorieStore.setTitle(e.target.value)}
              type="text"
              Icon={CgRename}
              placeholder={"Category Title"}
              id={"title"}
              required
            />
            <Input
              value={categorieStore.description}
              onChange={(e) => categorieStore.setDescription(e.target.value)}
              type="text"
              Icon={CgRename}
              placeholder={"Category Description"}
              id={"title"}
              required
            />
            <Input
              value={categorieStore.image}
              onChange={(e) => categorieStore.setImage(e.target.value)}
              type="file"
              Icon={CgRename}
              placeholder={"Category Image"}
            />
          </div>
        </div>
      </div>
      <div className="pt-5">{buttonActions}</div>
    </form>
  );
};
