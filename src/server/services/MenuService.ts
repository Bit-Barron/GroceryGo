import { db } from "../db";
import { MenuModel } from "../db/schema";
import { ProductDataProps } from "@/store/admin/AdminMenu";

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
