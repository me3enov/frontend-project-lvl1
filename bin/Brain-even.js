// IMPORT MODULES START
import Even from '../src/Even.js';

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
  evenGameText,
  startLevel: 0,
  endLevel: 3,
  difficulty: 100,
});

// start game
evenGame.startEvenGame();
