import { pgTable, timestamp, text, serial } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const categories = pgTable("categories", {
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	title: text("title").notNull(),
	description: text("description").notNull(),
	image: text("image").notNull(),
});

export const qrcodes = pgTable("qrcodes", {
	id: serial("id").primaryKey().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	code: text("code").notNull(),
	status: text("status").notNull(),
	productId: text("product_id").notNull(),
});

export const users = pgTable("users", {
	id: serial("id").primaryKey().notNull(),
	email: text("email").notNull(),
	password: text("password").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
});

export const products = pgTable("products", {
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	title: text("title").notNull(),
	smallDescription: text("small_description").notNull(),
	price: text("price").notNull(),
	description: text("description").notNull(),
});