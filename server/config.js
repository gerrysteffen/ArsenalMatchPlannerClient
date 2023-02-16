import dotenv from 'dotenv';
dotenv.config();

const config = {
  PORT: process.env.PORT ? process.env.PORT : '3006',
};

export default config