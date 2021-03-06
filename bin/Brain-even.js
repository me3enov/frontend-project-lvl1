// IMPORT MODULES START
import Even from '../src/games/Even.js';

import {
  userName,
  requestUserString,
  printMessage,
} from './brain-games.js';

import {
  questionsText,
  evenGameText,
} from '../src/utils/constants.js';
// IMPORT MODULES END

// is even game init
const evenGame = new Even({
  userName,
  printMessage,
  requestUserString,
  questionsText,
  futuresGameText: evenGameText,
  level: 0,
  endLevel: 3,
  // difficulty = max random number
  difficulty: 100,
  // difficultyStep = number growth to the next level (difficulty * difficultyStep)
  difficultyStep: 10,
});

// start game
evenGame.gameInit();
