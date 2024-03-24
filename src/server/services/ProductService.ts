import { ProductsProps } from "../../types/interface/index";
import { db } from "../db";
import { ProductModel } from "../db/schema";

export async function createProduct({
  description,
  price,
  smallDescription,
  title,
  userId,
}: ProductsProps) {
  try {
    console.log(price);
    const user = db.insert(ProductModel).values({
      title,
      description,
      smallDescription,
      price: price.toString(),
      userId,
      createdAt: new Date(),
    });

    return user;
  } catch (err) {
    console.error(err);
  }
}
