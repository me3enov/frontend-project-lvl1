// import main class "Game"
import Game from '../Game.js';

// extends "Game"
export default class Even extends Game {
  // constructor for the "Even" class
  constructor(parameters) {
    super(parameters);
    this._parameters = parameters;
  }

  // GAME FEATURES (GAME EVEN) FUNCTIONS START
  // get question for even game
  _getQuestion = () => {
    this._question = this._getRandomInt(1, this._difficulty);
  };

  // get correct answer
  _getCorrectAnswer = () => {
    this._correctAnswer = this._isPrime() ? this._correctly : this._wrong;
  };

  // get is even ?
  _isPrime = () => {
    for (let i = 2, s = Math.sqrt(this._randomNumber); i <= s; i += 1) {
      if (this._randomNumber % i === 0) return false;
    }
    return this._randomNumber > 1;
  };
  // GAME FEATURES (GAME EVEN) FUNCTIONS END

  // INIT GAME EVEN
  gameInit = () => {
    // config for game
    this._configGame = [
      this._getQuestion,
      this._getCorrectAnswer,
      this._printQuestion,
      this._printRequestAnswer,
      this._checkUserAnswer];

    // run game
    this._startGame(this._configGame);
  };
}
