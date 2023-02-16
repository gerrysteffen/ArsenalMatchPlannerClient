'use strict';

import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import cors from 'koa-cors';
import router from './router.js';

const app = new Koa();

app.use(cors());
app.use(bodyparser());

app.use(router.routes());

const port = 3002;

app.listen(port, () => {
  console.log(`server live on port ${port}`);
});
