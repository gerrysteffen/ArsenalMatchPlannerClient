import dotenv from 'dotenv';
dotenv.config();

console.log('hello')
console.log(process.env.backEndURL)

const config = {
  backEndURL: process.env.backEndURL ? process.env.backEndURL : 'http://localhost:3005',
};

export default config;
