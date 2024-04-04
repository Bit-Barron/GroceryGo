ALTER TABLE "menu" DROP CONSTRAINT "menu_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "menu" DROP COLUMN IF EXISTS "user_id";