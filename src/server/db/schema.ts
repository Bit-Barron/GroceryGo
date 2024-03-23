import { pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core";
import { uuid } from "drizzle-orm/pg-core";

export const UserModel = pgTable("users", {
  id: uuid("id").primaryKey().unique(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const ProductModel = pgTable("products", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  description: text("description").notNull(),
  title: text("title").notNull(),
  smallDescription: text("small_description").notNull(),
  price: text("price"),
  userId: integer("user_id").references(() => UserModel.id),
});

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
