import { Elysia } from "elysia";
import { createMenu } from "../services/MenuService";
import { getMenuById } from "../services/MenuService";
import { updateMenuById } from "../services/MenuService";
import { deleteMenuById } from "../services/MenuService";

export let MenuController = new Elysia();

MenuController.post("/createMenu", ({ body }) => {
  return createMenu(body as any);
});

MenuController.get("/getMenuById/:userId", ({ params: { userId } }) => {
  return getMenuById({ userId });
});

MenuController.post("/deleteMenuById/:id", ({ params: { id } }) => {
  return deleteMenuById({ id });
});

MenuController.post("/updateMenuById", ({ body }) => {
  return updateMenuById(body as any);
});
