import { ProductsProps } from "../../types/interface/index";
import { db } from "../db";
import { ProductModel } from "../db/schema";

export async function createProduct({
  description,
  price,
  smallDescription,
  title,
  userId,
  discount,
}: ProductsProps) {
  try {
    console.log(price);
    const user = db.insert(ProductModel).values({
      title,
      description,
      smallDescription,
      price: price.toString(),
      userId,
      discount,
      createdAt: new Date(),
    });

    return user;
  } catch (err) {
    console.error(err);
  }
}

export async function deleteProduict({ id }: any) {
  try {
    const user = db.delete(ProductModel).where({ id } as any);

    return user;
  } catch (err) {
    console.error(err);
  }
}

export async function getProductsById({ id }: any) {
  try {
    const user = db
      .select()
      .from(ProductModel)
      .where({ id } as any);

    return user;
  } catch (err) {
    console.error(err);
  }
}
