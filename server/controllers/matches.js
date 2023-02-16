'use strict';

import {
  createAPICall,
  getLastAPICall,
  updateLastAPICall,
} from '../models/apiCallLog.js';
import { fetchMatches, getAllMatches } from '../models/matches.js';

const APIcallIntervall = 86400000; // API only called every 24h, here in Milliseconds

export const getMatches = async (ctx) => {
  try {
    let res = [];
    const currentTime = Date.now();
    const lastAPIcall = await getLastAPICall('FootApi');
    if (!lastAPIcall) {
      await createAPICall('FootApi', currentTime);
      console.log('Footy API call');
      await fetchMatches();
      res = await getAllMatches();
    } else if (currentTime > lastAPIcall[0].lastCall + APIcallIntervall) {
      await updateLastAPICall('FootApi', currentTime);
      console.log('Footy API call');
      await fetchMatches();
      res = await getAllMatches();
    } else {
      res = await getAllMatches();
    }
    ctx.status = 200;
    ctx.body = JSON.stringify(res);
  } catch (error) {
    console.log(error);
    ctx.status = 500;
  }
};
