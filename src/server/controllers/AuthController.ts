import Elysia from "elysia";
import { login, logout } from "../services/AuthService";
import { register } from "../services/AuthService";

interface AuthControllerProps {
  email: string;
  password: string;
  confirmPassword: string;
}

export let AuthController = new Elysia();

AuthController.post("/login", ({ body }) => {
  return login(body as AuthControllerProps);
});

AuthController.post("/register", ({ body }) => {
  return register(body as AuthControllerProps);
});

AuthController.post("/logout", () => {
  return logout();
});
