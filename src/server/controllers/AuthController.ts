import Elysia from "elysia";
import { register, validateToken } from "../services/AuthService";
import { login } from "../services/AuthService";
import { AuthProps } from "@/types/interface";

export let AuthController = new Elysia();

AuthController.post("/register", ({ body }) => {
  return register(body as AuthProps);
});

AuthController.post("/login", ({ body }) => {
  return login(body as AuthProps);
});

AuthController.post("/validate-token", ({ body }) => {
  return validateToken(body);
});
