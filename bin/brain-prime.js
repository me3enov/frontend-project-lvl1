// IMPORT MODULES START
import Prime from '../src/games/Prime.js';

import {
  userName,
  requestUserString,
  printMessage,
} from './brain-games.js';

import {
  questionsText,
  primeGameText,
} from '../src/utils/constants.js';
// IMPORT MODULES END

// is even game init
const primeGame = new Prime({
  userName,
  printMessage,
  requestUserString,
  questionsText,
  futuresGameText: primeGameText,
  level: 0,
  endLevel: 3,
  // difficulty = max random number
  difficulty: 10,
  // difficultyStep = number growth to the next level (difficulty * difficultyStep)
  difficultyStep: 3,
});

// start game
primeGame.gameInit();
