#!/usr/bin/env node
// IMPORT LIBRARIES START
import readlineSync from 'readline-sync';

// IMPORT MODULES START
import Cli from '../src/Cli.js';

// IMPORT CONSTANTS START
import {
  user,
  gamesText,
  cliText,
} from '../src/utils/constants.js';

// constants games
const { gameName, welcomeText } = gamesText;
const requestUserString = readlineSync;
const start = `${gameName}\n${welcomeText}`;

// functions games
const printMessage = (string) => console.log(string);
const getUserName = (question) => requestUserString.question(question);

// user name init
const initUser = new Cli({
  printMessage,
  getUserName,
  text: cliText,
});

// start
printMessage(start);
// get username
const userName = initUser.initUser();
user.name = userName;

export {
  requestUserString,
  printMessage,
  userName,
};
