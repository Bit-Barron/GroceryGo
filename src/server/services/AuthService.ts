import bcrypt from "bcrypt";
import { UserModel } from "../db/schema";
import { db } from "../db";
import { AuthProps } from "@/types/store";
import { eq } from "drizzle-orm";
import jwt from "jsonwebtoken";
import { NotFoundError } from "elysia";

export const register = async ({
  password,
  confirmPassword,
  email,
}: AuthProps) => {
  if (password !== confirmPassword) {
    throw new Error("Password and confirm password do not match");
  }

  const existingUser = await db
    .select({ email: UserModel.email })
    .from(UserModel)
    .where(eq(UserModel.email, email));

  if (existingUser.length) throw new NotFoundError("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = db.insert(UserModel).values({
    email,
    password: hashedPassword,
    name: email,
    createdAt: new Date(),
  });

  return user;
};

export const login = async ({ email, password }: AuthProps) => {
  const user = await db
    .select()
    .from(UserModel)
    .where(eq(UserModel.email, email));
  console.log(user);

  if (!user) throw new Error("User not found");

  const passwordMatch = await bcrypt.compare(password, password);

  if (!passwordMatch) throw new Error("Password incorrect");

  return {
    user,
    token: "",
  };
};
