import { ProductsProps } from "../../types/interface/index";
import { db } from "../db";
import { ProductModel } from "../db/schema";

export async function createProduct({ body }: ProductsProps | any) {
  try {
    const user = db.insert(ProductModel).values({
      ...body,
    });

    console.log("user: ", user);
    return body;
  } catch (err) {
    console.error(err);
  }
}
