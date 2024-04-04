import { Elysia } from "elysia";
import { createMenu } from "../services/MenuService";

export let MenuController = new Elysia();

MenuController.post("/createMenu", ({ body }) => {
  return createMenu(body as any);
});
