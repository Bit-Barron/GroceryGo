import { OrderProps } from "@/types/interface";
import { db } from "../db";
import { OrderModel } from "../db/schema";

export async function createOrder({
  userId,
  productId,
  quantity,
  tableNumber,
  paymentMethod,
}: OrderProps) {
  try {
    const order = db.insert(OrderModel).values({
      userId,
      productId,
      quantity,
      tableNumber,
      paymentMethod,
      createdAt: new Date(),
    });

    return order;
  } catch (err) {
    console.error(err);
  }
}
