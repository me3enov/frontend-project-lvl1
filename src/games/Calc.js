// import main class "Game"
import Game from '../Game.js';

// extends "Game"
export default class Calc extends Game {
  // constructor for the "Calc" class
  constructor(parameters) {
    super(
      parameters.userName,
      parameters.printMessage,
      parameters.requestUserString,
      parameters.questionsText,
      parameters.futuresGameText,
      parameters.level,
      parameters.endLevel,
      parameters.difficulty,
      parameters.difficultyStep,
    );
  }

  // GAME FEATURES (GAME CALC) FUNCTIONS START
  // get question for calc game
  _getRandomSign = () => this._getRandomInt(3);

  // get question for calc game
  _getQuestion = () => {
    this._valueA = this._getRandomInt(this._difficulty);
    this._valueB = this._getRandomInt(this._difficulty);
    this._valueSing = this._getRandomSign();
    switch (this._valueSing) {
      case 0:
        this._question = `${this._valueA} - ${this._valueB}`;
        this._correctAnswer = (this._valueA - this._valueB).toString();
        break;
      case 1:
        this._question = `${this._valueA} + ${this._valueB}`;
        this._correctAnswer = (this._valueA + this._valueB).toString();
        break;
      case 2:
        this._question = `${this._valueA} * ${this._valueB}`;
        this._correctAnswer = (this._valueA * this._valueB).toString();
        break;
      default:
        this._question = `${this._valueA} + ${this._valueB}`;
        this._correctAnswer = (this._valueA + this._valueB).toString();
    }
  };

  // INIT GAME EVEN
  gameInit = () => {
    // config for game
    this._configGame = [
      this._getQuestion,
      this._printQuestion,
      this._printRequestAnswer,
      this._checkUserAnswer];

    // run game
    this._startGame(this._configGame);
  };
}
