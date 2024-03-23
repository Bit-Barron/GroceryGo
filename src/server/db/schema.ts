import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const UserModel = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const ProductModel = pgTable("products", {
  createdAt: timestamp("created_at").notNull().defaultNow(),
  descriptions: text("descriptions").notNull(),
  title: text("title").notNull(),
  smallDescription: text("small_description").notNull(),
  price: text("price").notNull(),
});

type ProductModel = typeof ProductModel.$inferInsert;

export const CategoriesModel = pgTable("categories", {
  createdAt: timestamp("created_at").notNull().defaultNow(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
});

export const QRCodeModel = pgTable("qrcodes", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  code: text("code").notNull(),
  status: text("status").notNull(),
  productId: text("product_id").notNull(),
});
