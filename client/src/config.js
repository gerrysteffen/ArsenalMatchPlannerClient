import env from "react-dotenv";

const config = {
  backEndURL: env.backEndURL ? env.backEndURL : 'http://localhost:3006',
};

export default config;
