import { ProductsProps } from "../../types/interface/index";
import { db } from "../db";
import { ProductModel } from "../db/schema";

export async function createProduct({
  description,
  price,
  smallDescription,
  title,
}: ProductsProps) {
  try {
    const user = db.insert(ProductModel).values({
      title,
      description,
      smallDescription,
      price: price.toString(),
      createdAt: new Date(),
    });

    console.log(user);

    return user;
  } catch (err) {
    console.error(err);
  }
}
