import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const UserModel = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type UserModel = typeof UserModel.$inferInsert;

export const ProductModel = pgTable("products", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  descriptions: text("descriptions").notNull(),
  status: text("status").notNull(),
  title: text("title").notNull(),
  smallDescription: text("small_description").notNull(),
});
