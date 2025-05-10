import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'

const sql = neon(postgresql://neondb_owner:npg_m9AfBtbQDJ2z@ep-morning-sun-a4niyk9t-pooler.us-east-1.aws.neon.tech/expense?sslmode=require);
const db = drizzle(sql,{schema});