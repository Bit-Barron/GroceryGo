import { Elysia } from "elysia";
import { createOrder } from "../services/OrderService";
import { OrderProps } from "@/types/interface";

export let OrderController = new Elysia();

OrderController.post("/createOrder", ({ body }) => {
  return createOrder(body as OrderProps);
});
