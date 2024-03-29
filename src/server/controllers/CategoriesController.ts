import { Elysia } from "elysia";
import { CategoriesProps } from "../../types/interface/index";
import { createCategory } from "../services/CategoriesService";

export let CategoriesController = new Elysia();

CategoriesController.post("/createCategory", ({ body }) => {
  return createCategory(body as CategoriesProps);
});
