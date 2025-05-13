
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.jsx",
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_m9AfBtbQDJ2z@ep-morning-sun-a4niyk9t-pooler.us-east-1.aws.neon.tech/expense?sslmode=require'
  },
});



/*
export default {
  schema: './utils/schema.jsx',
  dialect: 'pg',
  dbCredentials: {
    connectionString:'postgresql://neondb_owner:npg_m9AfBtbQDJ2z@ep-morning-sun-a4niyk9t-pooler.us-east-1.aws.neon.tech/expense?sslmode=require',
  },
};
*/