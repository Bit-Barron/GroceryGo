import type { Config } from "drizzle-kit";
// import schema from user schema

export default {
  schema: "./src/server/db/schema.ts",
  out: "./drizzle/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.PUBLIC_NEXT_DATABASE_URL!,
  },
} satisfies Config;
