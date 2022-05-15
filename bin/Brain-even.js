// IMPORT MODULES START
import Even from '../src/Even.js';

import {
  userName,
  requestUserString,
  printMessage,
} from './brain-games.js';

import {
  questionsText,
  wrongAnswerText,
} from '../src/utils/constants.js';
// IMPORT MODULES END

// is even game init
const evenGame = new Even({
  userName,
  printMessage,
  requestUserString,
  questionsText,
  wrongAnswerText,
  startLevel: 0,
  endLevel: 3,
  difficulty: 100,
});

// start game
evenGame.startEvenGame();
