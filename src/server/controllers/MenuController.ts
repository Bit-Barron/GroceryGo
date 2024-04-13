import { Elysia } from "elysia";
import { createMenu } from "../services/MenuService";
import { getMenuById } from "../services/MenuService";
import { deleteMenuById } from "../services/MenuService";
import { ProductDataProps } from "@/store/admin/AdminMenu";

export let MenuController = new Elysia();

MenuController.post("/createMenu", ({ body }) => {
  return createMenu(body as ProductDataProps);
});

MenuController.get("/getMenuById/:userId", ({ params: { userId } }) => {
  return getMenuById({ userId });
});

MenuController.post("/deleteMenuById/:id", ({ params: { id } }) => {
  return deleteMenuById({ id });
});
