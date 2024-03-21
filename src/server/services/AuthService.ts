import bcrypt from "bcrypt";
import { createInsertSchema, createSelectSchema } from "drizzle-typebox";
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

interface AuthServiceProps {
  email: string;
  password: string;
  confirmPassword: string;
}

const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const login = ({}: AuthServiceProps) => {
  return "Login Success";
};

export const register = async ({
  password,
  confirmPassword,
}: AuthServiceProps) => {
  console.log(password, confirmPassword);
  if (password !== confirmPassword) {
    throw new Error("Password and confirm password do not match");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  // Save the user to the database
  const user = createInsertSchema(users, {});

  return hashedPassword;
};

export const logout = async () => {
  return "Logout Success";
};
