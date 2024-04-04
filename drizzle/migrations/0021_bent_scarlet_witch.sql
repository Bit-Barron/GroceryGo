CREATE TABLE IF NOT EXISTS "menu" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"product_name" text NOT NULL
);
