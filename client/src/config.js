import env from "react-dotenv";

console.log('hello')
console.log(env.backEndURL)

const config = {
  backEndURL: env.backEndURL ? env.backEndURL : 'http://localhost:3005',
};

export default config;
