import Elysia from "elysia";
import { logout, register, validateToken } from "../services/AuthService";
import { login } from "../services/AuthService";
import { AuthProps } from "@/types/interface";

interface ValidTokenProps {
  token: string;
}

export let AuthController = new Elysia();

AuthController.post("/register", ({ body }) => {
  return register(body as AuthProps);
});

AuthController.post("/login", ({ body }) => {
  return login(body as AuthProps);
});

AuthController.post("/validate-token", ({ body }) => {
  return validateToken(body as ValidTokenProps);
});

AuthController.post("/logout", ({}) => {
  return logout();
});
