'use strict';

import mongoose from './index.js';

const ticketSchema = new mongoose.Schema({
  createdTimestamp: Number,
  updatedTimestamp: Number,
  matchid: Number,
  user: String,
  numberOfTickets: Number,
  comments: String,
});

const Ticket = mongoose.model('ticket', ticketSchema);

export const getAllTickets = async () => {
  return await Ticket.find({});
};

export const createOneTicket = async (dataPointInput) => {
  const { matchid, user, numberOfTickets } = dataPointInput;
  return await Ticket.create({
    createdTimestamp: new Date(),
    updatedTimestamp: new Date(),
    matchid: matchid,
    user: user,
    numberOfTickets: numberOfTickets,
  });
};

export const updateOneTicket = async (dataPointInput) => {
  const { _id, user, numberOfTickets, comments } = dataPointInput;
  await Ticket.updateOne(
    { _id: _id },
    {
      updatedTimestamp: new Date(),
      user: user,
      numberOfTickets: numberOfTickets,
      comments: comments,
    }
  );
};

export const deleteOneTicket = async (id) => {
  await Ticket.deleteOne({ _id: id });
};
