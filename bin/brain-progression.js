// IMPORT MODULES START
import Progression from '../src/games/Progression.js';

import {
  userName,
  requestUserString,
  printMessage,
} from './brain-games.js';

import {
  questionsText,
  progressionGameText,
} from '../src/utils/constants.js';
// IMPORT MODULES END

// is even game init
const progressionGame = new Progression({
  userName,
  printMessage,
  requestUserString,
  questionsText,
  futuresGameText: progressionGameText,
  level: 0,
  endLevel: 3,
  // difficulty = max random number
  difficulty: 10,
  // difficultyStep = number growth to the next level (difficulty * difficultyStep)
  difficultyStep: 5,
});

// start game
progressionGame.gameInit();
