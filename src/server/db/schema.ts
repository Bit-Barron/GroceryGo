import { pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core";

export const UserModel = pgTable("users", {
  id: serial("id").primaryKey().unique(),
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
  price: text("price").notNull(),
  userId: integer("user_id").references(() => UserModel.id),
  discount: text("discount").notNull(),
  imageId: text("image_id").notNull(),
  category: text("category_name").notNull(),
});

export const CategoriesModel = pgTable("categories", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  userId: integer("user_id").references(() => UserModel.id),
});

export const QrCodeModel = pgTable("qrcodes", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  tableNumber: text("table_number").notNull(),
  backgroundColor: text("background_color").notNull(),
  dotsOptions: text("dots_options").notNull(),
  userId: integer("user_id").references(() => UserModel.id),
});

export const OrderModel = pgTable("orders", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  userId: integer("user_id").references(() => UserModel.id),
  productId: integer("product_id").notNull(),
  quantity: integer("quantity").notNull(),
  tableNumber: text("table_number").notNull(),
  paymentMethod: text("payment_method").notNull(),
});
