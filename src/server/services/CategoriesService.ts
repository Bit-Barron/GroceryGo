import { db } from "../db";
import { CategoriesModel } from "../db/schema";
import { CategoriesProps } from "../../types/interface/index";

export async function createCategory({
  description,
  title,
  userId,
}: CategoriesProps) {
  try {
    const categories = db.insert(CategoriesModel).values({
      title,
      description,
      createdAt: new Date(),
      userId,
    });

    return categories;
  } catch (err) {
    console.error(err);
  }
}

export async function getCategoriesById({ id }: any) {
  try {
    const categories = db
      .select()
      .from(CategoriesModel)
      .where({ id } as any);

    return categories;
  } catch (err) {
    console.error(err);
  }
}
