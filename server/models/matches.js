'use strict';

import mongoose from './index.js';
import axios from 'axios';
import cron from 'node-cron'

const matchSchema = new mongoose.Schema({
  matchid: Number,
  tournament: String,
  round: Number,
  timestamp: Number,
  homeTeam: {
    name: String,
    shortName: String,
    teamColors: {
      secondary: String,
      primary: String,
      text: String,
    },
  },
  awayTeam: {
    name: String,
    shortName: String,
    teamColors: {
      secondary: String,
      primary: String,
      text: String,
    },
  },
});

const Match = mongoose.model('match', matchSchema);

export const getAllMatches = async () => {
  return await Match.find({});
};

import dotenv from 'dotenv';
dotenv.config();

const footapiURL = process.env.footapiURL;
const key = process.env.footapiKey
const host = process.env.footapiHost

export const fetchMatches = async () => {
  const options = {
    method: 'GET',
    url: footapiURL,
    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': host,
    },
  };
  let res;
  await axios
    .request(options)
    .then((response) => {
      res = response.data.events;
    })
    .catch((error) => {
      console.log(error);
    });
  await saveDataToDatabase(res);
};

export const saveDataToDatabase = async (data) => {
  for (let match of data) {
    // Primary team color and team text color needs a good contrast,
    // therefore a function to adjust text color if necessary:
    match.homeTeam.teamColors = checkTextColor(match.homeTeam.teamColors);
    match.awayTeam.teamColors = checkTextColor(match.awayTeam.teamColors);
    // after color check and if necessary adjustment, save to database
    const dataPoint = {
      matchid: match.id,
      tournament: match.tournament.name,
      round: match.roundInfo.round,
      timestamp: match.startTimestamp * 1000,
      homeTeam: {
        name: match.homeTeam.name,
        shortName: match.homeTeam.shortName,
        teamColors: {
          secondary: match.homeTeam.teamColors.secondary,
          primary: match.homeTeam.teamColors.primary,
          text: match.homeTeam.teamColors.text,
        },
      },
      awayTeam: {
        name: match.awayTeam.name,
        shortName: match.awayTeam.shortName,
        teamColors: {
          secondary: match.awayTeam.teamColors.secondary,
          primary: match.awayTeam.teamColors.primary,
          text: match.awayTeam.teamColors.text,
        },
      },
    };
    console.log(dataPoint)
    const previousDatapoint = await Match.find({ matchid: dataPoint.matchid });
    if (previousDatapoint.length === 0) {
      await createOneMatch(dataPoint);
    } else {
      await updateOneMatch(dataPoint);
    }
  }
};

const checkTextColor = (teamColors) => {
  const rgbPrimary = hexToRgb(teamColors.primary);
  const luminancePrimary =
    0.2126 * rgbPrimary.r + 0.7152 * rgbPrimary.g + 0.0722 * rgbPrimary.b;
  const rgbText = hexToRgb(teamColors.text);
  const luminanceText =
    0.2126 * rgbText.r + 0.7152 * rgbText.g + 0.0722 * rgbText.b;
  if (Math.abs(luminanceText - luminancePrimary) < 50) {
    if (luminancePrimary < 125) {
      teamColors.text = '#ffffff';
    } else {
      teamColors.text = '#000000';
    }
  }
  return teamColors;
};

const hexToRgb = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

const createOneMatch = async (dataPointInput) => {
  const { matchid, tournament, round, timestamp, homeTeam, awayTeam } =
    dataPointInput;
  await Match.create({
    matchid,
    tournament,
    round,
    timestamp,
    homeTeam,
    awayTeam,
  });
};

const updateOneMatch = async (dataPointInput) => {
  const { matchid, tournament, round, timestamp, homeTeam, awayTeam } =
    dataPointInput;
  await Match.updateOne(
    { matchid: matchid },
    {
      tournament: tournament,
      round: round,
      timestamp: timestamp,
      homeTeam: homeTeam,
      awayTeam: awayTeam,
    }
  );
};

cron.schedule('0 0 * * *', async () => {
  await fetchMatches()
  console.log('Api call done')
});