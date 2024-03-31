ALTER TABLE "qrcodes" ADD COLUMN "table_number" text NOT NULL;--> statement-breakpoint
ALTER TABLE "qrcodes" ADD COLUMN "background_color" text NOT NULL;--> statement-breakpoint
ALTER TABLE "qrcodes" ADD COLUMN "dots_options" text NOT NULL;--> statement-breakpoint
ALTER TABLE "qrcodes" ADD COLUMN "user_id" integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "qrcodes" ADD CONSTRAINT "qrcodes_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "qrcodes" DROP COLUMN IF EXISTS "code";--> statement-breakpoint
ALTER TABLE "qrcodes" DROP COLUMN IF EXISTS "status";--> statement-breakpoint
ALTER TABLE "qrcodes" DROP COLUMN IF EXISTS "product_id";