// import main class "Game"
import Game from '../Game.js';

// extends "Game"
export default class Calc extends Game {
  // constructor for the "Calc" class
  constructor(parameters) {
    super(parameters);
    this._operators = ['+', '-', '*'];
  }

  // GAME FEATURES (GAME CALC) FUNCTIONS START
  // get random operator
  _getRandomOperator = () => this._operators[this._getRandomInt(0, this._operators.length - 1)];

  // get question for calc game
  _getQuestion = () => {
    this._valueA = this._getRandomInt(1, this._difficulty);
    this._valueB = this._getRandomInt(1, this._difficulty);
    this._operator = this._getRandomOperator();
    this._question = `${this._valueA} ${this._operator} ${this._valueB}`;
  };

  // // get correct answer
  _getCorrectAnswer = () => {
    switch (this._operator) {
      case '+':
        this._correctAnswer = String(this._valueA + this._valueB);
        break;
      case '-':
        this._correctAnswer = String(this._valueA - this._valueB);
        break;
      case '*':
        this._correctAnswer = String(this._valueA * this._valueB);
        break;
      default:
        break;
    }
  };

  // INIT GAME CALC
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
