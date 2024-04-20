import { AuthController } from "@/server/controllers/AuthController";
import { CategoriesController } from "@/server/controllers/CategoriesController";
import { ProductController } from "@/server/controllers/ProductController";
import { OrderController } from "@/server/controllers/OrderController";
import { QrCodeController } from "@/server/controllers/QrCodeController";
import { Elysia } from "elysia";
import { MenuController } from "@/server/controllers/MenuController";

const app = new Elysia({ prefix: "/api" })
  .use(AuthController)
  .use(ProductController)
  .use(CategoriesController)
  .use(QrCodeController)
  .use(OrderController)
  .use(MenuController);

export const GET = app.handle;
export const POST = app.handle;
