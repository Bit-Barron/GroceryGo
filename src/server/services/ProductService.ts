import { ProductsProps } from "../../types/interface/index";
import { db } from "../db";
import { ProductModel } from "../db/schema";
import { eq } from "drizzle-orm";

export async function createProduct({
  description,
  price,
  smallDescription,
  title,
  userId,
  discount,
  imageId,
  category,
}: ProductsProps) {
  try {
    const product = db.insert(ProductModel).values({
      title,
      description,
      smallDescription,
      price: price.toString(),
      userId,
      discount,
      createdAt: new Date(),
      imageId,
      category,
    });

    return product;
  } catch (err) {
    console.error(err);
  }
}

export async function deleteProduct({ id }: any) {
  try {
    const user = db.delete(ProductModel).where({ id } as any);

    return user;
  } catch (err) {
    console.error(err);
  }
}

export async function getProductsById({ userId }: any) {
  try {
    const user = db
      .select()
      .from(ProductModel)
      .where(eq(userId, ProductModel.userId));

    return user;
  } catch (err) {
    console.error(err);
  }
}

export async function deleteProductById({ productId }: any) {
  try {
    const user = db.delete(ProductModel).where(eq(productId, ProductModel.id));
    return user;
  } catch (err) {
    console.error(err);
  }
}
