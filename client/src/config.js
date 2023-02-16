import dotenv from 'dotenv';
dotenv.config();

const config = {
  backEndURL: process.env.DB_URL ? process.env.DB_URL : 'http://localhost:3002',
};

export default config;
