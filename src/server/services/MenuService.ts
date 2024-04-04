import { db } from "../db";
import { MenuModel }  from "../db/schema";

export async function createMenu({ productName }: any) {
  try {
    const product = db.insert(MenuModel).values({
      productName,
    });

    return product;
  } catch (err) {
    console.error(err);
  }
}
