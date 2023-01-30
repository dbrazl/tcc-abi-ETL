import 'dotenv/config';

export default {
  dialect: 'postgres',
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  },
  logging: false
};