

export default {
  schema: './schema.ts',
  dialect: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
};
