export default class Game {
  // constructor for the "Game" class
  constructor({
    userName,
    printMessage,
    requestUserString,
    questionsText,
    futuresGameText,
    level,
    endLevel,
    difficulty,
    difficultyStep,
  }) {
    // username
    this._userName = userName;

    // functions for "Game" class (bin/brain-games)
    this._printMessage = printMessage;
    this._requestUserString = requestUserString;

    // text for games (src/unils/constants) questionsText
    this._questionText = questionsText.questionText;
    this._answerText = questionsText.answerText;
    this._tryAgainText = questionsText.tryAgainText;
    this._goodAnswerText = questionsText.goodAnswerText;
    this._winText = questionsText.winText;
    this._badAnswerText = questionsText.badAnswerText;
    this._correctly = questionsText.correctly;
    this._wrong = questionsText.wrong;

    // futures game text (src/unils/constants) [$game-name]GameText
    this._descriptionGameText = futuresGameText.descriptionGameText;

    // set start level
    this._level = level;
    // set end level
    this._endLevel = endLevel;
    // set start difficulty
    this._difficulty = difficulty;
    // step of increasing difficulty for each new level
    this._difficultyStep = difficultyStep;
  }

  // MAIN FUNCTIONS START
  // print question
  _printQuestion = () => {
    this._printMessage(`${this._questionText}${this._question}`);
  };

  // print request answer
  _printRequestAnswer = () => {
    this._userAnswer = this._requestUserString.question(this._answerText).toLowerCase();
  };

  // check user answer
  _checkUserAnswer = () => {
    if (this._checkAnswer()) this._levelCompleted();
    else this._levelFailed();
  };
  // MAIN FUNCTIONS END

  // HELPER INTERNAL FUNCTIONS START
  // get random number 0 or N (N < max)
  _getRandomInt = (max) => {
    this._randomNumber = Math.floor(Math.random() * max);
    return this._randomNumber;
  };

  // check user answer
  _checkAnswer = () => this._correctAnswer === this._userAnswer;

  // check user answer
  _checkEndGame = () => this._level === this._endLevel;

  // level successfully completed
  _levelCompleted() {
    this._printMessage(this._goodAnswerText);
    this._level += 1;
    this._difficulty *= this._difficultyStep;
  }

  // level failed, game over!
  _levelFailed() {
    this._printMessage(`'${this._userAnswer}'${this._badAnswerText}'${this._correctAnswer}'.\n${this._tryAgainText}${this._userName}`);
    this._level = this._endLevel + 1;
  }

  // game successfully completed
  _gameCompleted() {
    this._printMessage(`${this._winText}${this._userName}`);
  }
  // HELPER INTERNAL FUNCTIONS END

  // START GAME
  _startGame(functions) {
    // print game description
    this._printMessage(this._descriptionGameText);

    // main logig game
    for (; this._level < this._endLevel;) {
      functions.forEach((element) => {
        element();
      });
    }

    // game successfully completed
    if (this._checkEndGame()) this._gameCompleted();
  }
}
