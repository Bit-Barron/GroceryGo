import { Elysia } from "elysia";
import { CategoriesProps } from "../../types/interface/index";
import { createCategory } from "../services/CategoriesService";
import { getCategoriesById } from "../services/CategoriesService";

export let CategoriesController = new Elysia();

CategoriesController.post("/createCategories", ({ body }) => {
  return createCategory(body as CategoriesProps);
});

CategoriesController.get("/getCategoriesById/:userId", ({ params: { userId } }) => {
  return getCategoriesById({ userId });
});
