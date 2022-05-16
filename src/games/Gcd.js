// import main class "Game"
import Game from '../Game.js';

// extends "GCD"
export default class Gcd extends Game {
  // constructor for the "GCD" class
  constructor(parameters) {
    super(parameters);
    this._parameters = parameters;
  }

  // GAME FEATURES (GAME GCD) FUNCTIONS START
  // get question for gcd game
  _getQuestion = () => {
    this._valueA = this._getRandomInt(this._difficulty);
    this._valueB = this._getRandomInt(this._difficulty);
    this._question = `${this._valueA} ${this._valueB}`;
  };

  // get correct answer
  _getCorrectAnswer = () => {
    const getGcb = (a, b) => {
      if (!b) {
        return a;
      }
      return getGcb(b, a % b);
    };
    this._correctAnswer = String(getGcb(this._valueA, this._valueB));
  };

  // INIT GAME GCD
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
