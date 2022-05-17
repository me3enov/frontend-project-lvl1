// import main class "Game"
import Game from '../Game.js';

// extends "Progression"
export default class Progression extends Game {
  // constructor for the "Progression" class
  constructor(parameters) {
    super(parameters);
    this._parameters = parameters;
  }

  // GAME FEATURES (GAME Progression) FUNCTIONS START
  // get sequence for progression game
  _getSequence = () => {
    let value = this._getRandomInt(1, this._difficulty);
    this._step = this._getRandomInt(1, this._difficulty);
    const sequenceLength = this._getRandomInt(5, 10) - 1;
    const sequence = [];
    const emptyIndex = this._getRandomInt(0, sequenceLength);
    for (let i = 0; i <= sequenceLength; i += 1) {
      sequence.push(value);
      value += this._step;
    }
    this._emptyItem = sequence[emptyIndex];
    sequence[emptyIndex] = '..';
    return sequence;
  };

  // get question for progression game
  _getQuestion = () => {
    this._question = this._getSequence().join(' ');
  };

  // get correct answer
  _getCorrectAnswer = () => {
    this._correctAnswer = String(this._emptyItem);
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
