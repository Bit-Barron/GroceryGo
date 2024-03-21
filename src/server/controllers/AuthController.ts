import Elysia from "elysia";
import { register } from "../services/AuthService";
import { login } from "../services/AuthService";

interface AuthControllerProps {
  email: string;
  password: string;
  confirmPassword: string;
}

export let AuthController = new Elysia();

AuthController.post("/register", ({ body }) => {
  return register(body as AuthControllerProps);
});

AuthController.post("/login", ({ body }) => {
  return login(body as AuthControllerProps);
});
