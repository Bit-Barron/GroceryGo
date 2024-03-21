import { pgTable, serial, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const UserModel = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const ProductModel = pgTable("products", {
  createdAt: timestamp("created_at").notNull().defaultNow(),
  descriptions: text("descriptions").notNull(),
  status: text("status").notNull(),
  title: text("title").notNull(),
  image: text("image").notNull(),
  smallDescription: text("small_description").notNull(),
});

export type ProductModel = typeof ProductModel.$inferInsert;

export const CategoriesModel = pgTable("categories", {
  createdAt: timestamp("created_at").notNull().defaultNow(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
});

export type CategoriesModel = typeof CategoriesModel.$inferInsert;

export const QRCodeModel = pgTable("qrcodes", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  code: text("code").notNull(),
  status: text("status").notNull(),
  productId: text("product_id").notNull(),
});

export type QRCodeModel = typeof QRCodeModel.$inferInsert;
