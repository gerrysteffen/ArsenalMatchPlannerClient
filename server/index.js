'use strict';

import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import cors from 'koa-cors';
import router from './router.js';

const app = new Koa();

app.use(cors());
app.use(bodyparser());

app.use(router.routes());

import config from './config.js';
const port = config.PORT;

app.listen(port, () => {
  console.log(`server live on port ${port}`);
});
