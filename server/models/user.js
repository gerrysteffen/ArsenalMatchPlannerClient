'use strict';

import mongoose from './index.js';

const userSchema = new mongoose.Schema({
  createdTimestamp: Number,
  name: String,
});

const User = mongoose.model('user', userSchema);

export const getAllUsers = async () => {
  return await User.find({});
};

export const createOneUser = async (dataPointInput) => {
  const { name } = dataPointInput;
  return await User.create({
    createdTimestamp: new Date(),
    name: name,
  });
};
