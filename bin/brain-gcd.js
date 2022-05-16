// IMPORT MODULES START
import Gcd from '../src/games/Gcd.js';

import {
  userName,
  requestUserString,
  printMessage,
} from './brain-games.js';

import {
  questionsText,
  gcdGameText,
} from '../src/utils/constants.js';
// IMPORT MODULES END

// is even game init
const gcdGame = new Gcd({
  userName,
  printMessage,
  requestUserString,
  questionsText,
  futuresGameText: gcdGameText,
  level: 0,
  endLevel: 3,
  // difficulty = max random number
  difficulty: 10,
  // difficultyStep = number growth to the next level (difficulty * difficultyStep)
  difficultyStep: 3,
});

// start game
gcdGame.gameInit();
