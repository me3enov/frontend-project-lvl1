export default class Even {
  // constructor for the "Even" class
  constructor({
    userName,
    printMessage,
    requestUserString,
    questionsText,
    wrongAnswerText,
    startLevel,
    endLevel,
    difficulty,
  }) {
    // username
    this._userName = userName;

    // functions for "Even" class (bin/brain-games)
    this._printMessage = printMessage;
    this._requestUserString = requestUserString;

    // text for games (src/unils/constants) questionsText
    this._questionText = questionsText.questionText;
    this._answerText = questionsText.answerText;
    this._tryAgainText = questionsText.tryAgainText;
    this._goodAnswerText = questionsText.goodAnswerText;
    this._winText = questionsText.winText;
    this._correctly = questionsText.correctly;
    this._wrong = questionsText.wrong;

    // text for games (src/unils/constants) questionsText
    this._descriptionGameText = wrongAnswerText.descriptionGameText;
    this._badAnswerText = wrongAnswerText.badAnswerText;

    // set start level
    this._startLevel = startLevel;
    // set end level
    this._endLevel = endLevel;
    // set start difficulty
    this._difficulty = difficulty;
  }

  // get random number 0 or N (N < max)
  _getRandomInt = () => Math.floor(Math.random() * this._difficulty);

  // get correct answer - number is even ?
  _isEven = () => this._randomNumber % 2 === 0;

  // check user answer
  _checkAnswer = () => this._correctAnswer === this._userAnswer;

  // check user answer
  _checkEndGame = () => this._startLevel === this._endLevel;

  // level successfully completed
  _levelCompleted() {
    this._printMessage(this._goodAnswerText);
    this._startLevel += 1;
    this._difficulty *= 10;
  }

  // level failed, game over!
  _levelFailed() {
    this._printMessage(`'${this._userAnswer}'${this._badAnswerText}'${this._correctAnswer}'.\n${this._tryAgainText}${this._userName}`);
    this._startLevel = 4;
  }

  // game successfully completed
  _gameCompleted() {
    this._printMessage(`${this._winText}${this._userName}`);
  }

  // start game
  startEvenGame() {
    // print game description
    this._printMessage(this._descriptionGameText);

    // main logig game
    for (; this._startLevel < this._endLevel;) {
      // get random number
      this._randomNumber = this._getRandomInt();

      // get correct answer
      this._correctAnswer = this._isEven() ? this._correctly : this._wrong;

      // print question
      this._printMessage(`${this._questionText}${this._randomNumber}`);

      // print request answer
      this._userAnswer = this._requestUserString.question(this._answerText);

      // check user answer
      if (this._checkAnswer()) this._levelCompleted();
      else this._levelFailed();
    }

    // game successfully completed
    if (this._checkEndGame()) this._gameCompleted();
  }
}
