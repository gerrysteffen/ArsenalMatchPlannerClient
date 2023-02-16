import dotenv from 'dotenv';
dotenv.config();

const config = {
  PORT: process.env.PORT ? process.env.PORT : 'http://localhost:3005',
};
