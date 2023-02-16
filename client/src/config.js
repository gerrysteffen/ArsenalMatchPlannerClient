import dotenv from 'dotenv';
dotenv.config();

const config = {
  backEndURL: 'http://localhost:3005'
  process.env.backEndURL ? process.env.backEndURL : 'http://localhost:3005',
};

export default config;
