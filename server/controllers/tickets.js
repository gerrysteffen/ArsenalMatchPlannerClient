'use strict';

import {
  createOneTicket,
  deleteOneTicket,
  getAllTickets,
  updateOneTicket,
} from '../models/tickets.js';

export const getTickets = async (ctx) => {
  try {
    let res = await getAllTickets();
    ctx.status = 200;
    ctx.body = JSON.stringify(res);
  } catch (error) {
    console.log(error);
    ctx.status = 500;
  }
};

export const createTicket = async (ctx) => {
  try {
    const data = ctx.request.body;
    let res = await createOneTicket(data);
    ctx.status = 201;
    ctx.body = JSON.stringify(res);
  } catch (error) {
    console.log(error);
    ctx.status = 500;
  }
};

export const deleteTicket = async (ctx) => {
  try {
    const { id } = ctx.request.body;
    await deleteOneTicket(id);
    ctx.status = 202;
  } catch (error) {
    console.log(error);
    ctx.status = 500;
  }
};

export const updateTicket = async (ctx) => {
  try {
    const data = ctx.request.body;
    await updateOneTicket(data);
    ctx.status = 204;
  } catch (error) {
    console.log(error);
    ctx.status = 500;
  }
};
