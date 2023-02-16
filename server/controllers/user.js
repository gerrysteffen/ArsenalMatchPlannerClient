'use strict';

import { createOneUser, getAllUsers } from '../models/user.js';

export const getUsers = async (ctx) => {
  try {
    let res = await getAllUsers();
    ctx.status = 200;
    ctx.body = JSON.stringify(res);
  } catch (error) {
    console.log(error);
    ctx.status = 500;
  }
};

export const createUser = async (ctx) => {
  try {
    const data = ctx.request.body;
    let res = await createOneUser(data);
    ctx.status = 201;
    ctx.body = JSON.stringify(res);
  } catch (error) {
    console.log(error);
    ctx.status = 500;
  }
};
