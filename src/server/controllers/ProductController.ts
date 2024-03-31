import { Elysia } from "elysia";
import { ProductsProps } from "../../types/interface/index";
import { createProduct } from "../services/ProductService";
import { getProductsById } from "../services/ProductService";

export let ProductController = new Elysia();

ProductController.post("/createProduct", ({ body }) => {
  return createProduct(body as ProductsProps);
});

ProductController.get("/getProductsById/:id", ({ params: { id } }) => {
  return getProductsById({ id });
});
