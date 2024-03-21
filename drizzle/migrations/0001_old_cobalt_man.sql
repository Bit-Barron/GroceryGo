CREATE TABLE IF NOT EXISTS "categories" (
	"created_at" timestamp DEFAULT now() NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"image" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"descriptions" text NOT NULL,
	"status" text NOT NULL,
	"title" text NOT NULL,
	"image" text NOT NULL,
	"small_description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "qrcodes" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"code" text NOT NULL,
	"status" text NOT NULL,
	"product_id" text NOT NULL
);
