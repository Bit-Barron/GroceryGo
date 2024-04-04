import { Elysia } from "elysia";
import { createMenu } from "../services/MenuService";
import { getMenuById } from "../services/MenuService";

export let MenuController = new Elysia();

MenuController.post("/createMenu", ({ body }) => {
  return createMenu(body as any);
});

MenuController.get("/getMenuById/:userId", ({ params: { userId } }) => {
  return getMenuById({ userId });
});
