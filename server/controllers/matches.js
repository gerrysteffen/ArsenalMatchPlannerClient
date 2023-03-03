'use strict';

import { getAllMatches } from '../models/matches.js';

export const getMatches = async (ctx) => {
  try {
    const res = await getAllMatches();
    res.sort((a, b)=>a.timestamp - b.timestamp)
    ctx.status = 200;
    ctx.body = JSON.stringify(res);
  } catch (error) {
    console.log(error);
    ctx.status = 500;
  }
};
