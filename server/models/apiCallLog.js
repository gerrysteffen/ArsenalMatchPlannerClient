'use strict';

import mongoose from './index.js';

const apiCallLogSchema = new mongoose.Schema({
  apiName: String,
  lastCall: Number,
});

const APIcall = mongoose.model('apiCall', apiCallLogSchema);

export const getLastAPICall = async (apiNameInput) => {
  const res = await APIcall.find({ apiName: apiNameInput });
  return res.length > 0 ? res : false;
};

export const createAPICall = async (apiNameInput, lastCallInput) => {
  const res = await APIcall.create({
    apiName: apiNameInput,
    lastCall: lastCallInput,
  });
  return res;
};

export const updateLastAPICall = async (apiNameInput, lastCallInput) => {
  const res = await APIcall.updateOne(
    { apiName: apiNameInput },
    { lastCall: lastCallInput }
  );
  return res;
};
