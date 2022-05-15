#!/usr/bin/env node
// IMPORT LIBRARIES START
import readlineSync from 'readline-sync';

// IMPORT MODULES START
import Cli from '../src/Cli.js';
import Even from './Brain-even.js';

// IMPORT CONSTANTS START
import {
  user,
  gamesText,
  cliText,
  questionsText,
  evenGameText,
} from '../src/utils/constants.js';

// constants games
const { gameName, welcomeText } = gamesText;
const requestUserString = readlineSync;
const start = `${gameName}\n${welcomeText}`;

// functions games
const printMessage = (string) => console.log(string);
const getUserName = (question) => requestUserString.question(question);

// user name init
const userName = new Cli({
  printMessage,
  getUserName,
  text: cliText,
});

// start
printMessage(start);
// get username
user.name = userName.initUser();

// is even game init
const evenGame = new Even({
  name: user.name,
  printMessage,
  requestUserString,
  questionsText,
  evenGameText,
  startLevel: 0,
  endLevel: 3,
  difficulty: 100,
});

evenGame.startEvenGame();
