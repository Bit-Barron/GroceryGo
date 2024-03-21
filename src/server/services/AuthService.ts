import bcrypt from "bcrypt";
import { createInsertSchema } from "drizzle-typebox";
import { UserModel } from "../db/schema";

interface AuthServiceProps {
  email: string;
  password: string;
  confirmPassword: string;
}

export const login = ({}: AuthServiceProps) => {
  return "Login Success";
};

export const register = async ({
  password,
  confirmPassword,
  email,
}: AuthServiceProps) => {
  console.log(password, confirmPassword);
  if (password !== confirmPassword) {
    throw new Error("Password and confirm password do not match");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = createInsertSchema(UserModel, {
    password: hashedPassword as any,
  });

  return user;
};

export const logout = async () => {
  return "Logout Success";
};
