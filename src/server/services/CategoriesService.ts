import { db } from "../db";
import { CategoriesModel } from "../db/schema";
import { CategoriesProps } from "../../types/interface/index";
import { eq } from "drizzle-orm";

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

export async function getCategoriesById({ userId }: any) {
  try {
    // get all categories by id

    const categories = await db
      .select()
      .from(CategoriesModel)
      .where(eq(userId, CategoriesModel.userId));

    return categories;
  } catch (err) {
    console.error(err);
  }
}
