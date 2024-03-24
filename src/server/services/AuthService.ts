import bcrypt from "bcrypt";
import { UserModel } from "../db/schema";
import { db } from "../db";
import { AuthProps } from "@/types/interface";
import { eq } from "drizzle-orm";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const register = async ({
  password,
  confirmPassword,
  email,
}: AuthProps) => {
  const existingUser = await db
    .select({ email: UserModel.email })
    .from(UserModel)
    .where(eq(UserModel.email, email));

  if (existingUser.length) throw new Error("User already exists");
  if (password !== confirmPassword) {
    throw new Error("Password and confirm password do not match");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = db.insert(UserModel).values({
    email,
    password: hashedPassword,
    createdAt: new Date(),
  });

  return user;
};

export const login = async ({ email, password }: AuthProps) => {
  const CookieStore = cookies();

  const user = await db
    .select()
    .from(UserModel)
    .where(eq(UserModel.email, email));
  if (!user) throw new Error("User not found");

  const passwordMatch = await bcrypt.compare(password, user[0].password);

  if (!passwordMatch) throw new Error("Password incorrect");

  const token = jwt.sign(
    {
      userId: user[0].id,
    },
    `${process.env.NEXT_PUBLIC_JWT_SECRET}`,
    { expiresIn: "1h" }
  );

  const verifyToken = jwt.verify(
    token,
    `${process.env.NEXT_PUBLIC_JWT_SECRET}`
  );

  if (!verifyToken) throw new Error("Invalid token");

  const jwtCookie = CookieStore.set("token", token);

  const userId = user[0].id;

  const userIdCookie = CookieStore.set("userId", userId);

  return jwtCookie;
};

export const validateToken = async ({ token }: any) => {
  const verifyToken = jwt.verify(
    token,
    `${process.env.NEXT_PUBLIC_JWT_SECRET}`
  );

  if (!verifyToken) throw new Error("Invalid token");

  return verifyToken;
};

export const logout = async () => {
  const CookieStore = cookies();
  const jwtCookie = CookieStore.set("token", "");
  return jwtCookie;
};
