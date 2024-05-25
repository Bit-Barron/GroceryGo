import { db } from "../db";
import { MenuModel } from "../db/schema";
import { ProductDataProps } from "@/store/admin/MenuStore";
import { eq } from "drizzle-orm";

export async function createMenu({
  productName,
  productCategory,
  productDescription,
  productPrice,
  userId,
}: ProductDataProps) {
  try {
    const product = db.insert(MenuModel).values({
      productName,
      productCategory,
      productDescription,
      productPrice: productPrice.toString(),
      createdAt: new Date(),
      userId,
    });

    return product;
  } catch (err) {
    console.error(err);
  }
}

export async function getMenuById({ userId }: any) {
  try {
    const user = db
      .select()
      .from(MenuModel)
      .where(eq(userId, MenuModel.userId));

    return user;
  } catch (err) {
    console.error(err);
  }
}

export async function deleteMenuById({ id }: any) {
  try {
    const menu = db.delete(MenuModel).where(eq(id, MenuModel.id));
    return menu;
  } catch (err) {
    console.error(err);
  }
}
