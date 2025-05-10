

export default {
  schema: './utils/schema.jsx',
  dialect: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
};
