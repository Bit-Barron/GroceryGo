// app/[[...slugs]]/route.ts
import { AuthController } from "@/server/controllers/AuthController";
import { CategoriesController } from "@/server/controllers/CategoriesController";
import { ProductController } from "@/server/controllers/ProductController";
import { QrCodeController } from "@/server/controllers/QrCodeController";
import { Elysia } from "elysia";

const app = new Elysia({ prefix: "/api" })
  .use(AuthController)
  .use(ProductController)
  .use(CategoriesController)
  .use(QrCodeController)

export const GET = app.handle;
export const POST = app.handle;
