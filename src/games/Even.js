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
    this._question = this._getRandomInt(this._difficulty);
  };

  // get correct answer
  _getCorrectAnswer = () => {
    this._correctAnswer = this._getAnswer() ? this._correctly : this._wrong;
  };

  // get is even ?
  _getAnswer = () => this._randomNumber % 2 === 0;
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
