import { Elysia } from "elysia";
import { ProductsProps } from "../../types/interface/index";
import { createProduct } from "../services/ProductService";

export let ProductController = new Elysia();

ProductController.post("/createProduct", ({ body }) => {
  return createProduct(body as ProductsProps);
});
