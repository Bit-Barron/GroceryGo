import * as schema from "./schema";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const queryClient = postgres(process.env.PUBLIC_NEXT_DATABASE_URL!);
export const db = drizzle(queryClient, { schema });
