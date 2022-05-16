// IMPORT MODULES START
import Calc from '../src/games/Calc.js';

import {
  userName,
  requestUserString,
  printMessage,
} from './brain-games.js';

import {
  questionsText,
  calcGameText,
} from '../src/utils/constants.js';
// IMPORT MODULES END

// is even game init
const calcGame = new Calc({
  userName,
  printMessage,
  requestUserString,
  questionsText,
  futuresGameText: calcGameText,
  level: 0,
  endLevel: 3,
  // difficulty = max random number
  difficulty: 10,
  // difficultyStep = number growth to the next level (difficulty * difficultyStep)
  difficultyStep: 2,
});

// start game
calcGame.gameInit();
