import env from "react-dotenv";

console.log('hello')
console.log(env.backEndURL)
console.log(env)
console.log(process.env)


const config = {
  backEndURL: env.backEndURL ? env.backEndURL : 'http://localhost:3005',
};

export default config;
