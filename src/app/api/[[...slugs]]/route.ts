// app/[[...slugs]]/route.ts
import { AuthController } from "@/server/controllers/AuthController";
import { Elysia } from "elysia";

const app = new Elysia({ prefix: "/api" }).use(AuthController);

export const GET = app.handle;
export const POST = app.handle;
