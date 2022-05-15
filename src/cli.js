export default class Cli {
  // constructor for the "Cli" class
  constructor({
    printMessage,
    getUserName,
    text,
  }) {
    // functions for "Cli" class (bin/brain-games)
    this._printMessage = printMessage;
    this._getUserName = getUserName;

    // text for "Cli" class (src/unils/constants) cliText
    this._requestUserText = text.requestUserText;
    this._helloText = text.helloText;
  }

  // get username
  _getUser(message) {
    this._name = this._getUserName(message);
    return this._name;
  }

  // init user
  initUser() {
    // get username
    this._user = this._getUser(this._requestUserText);
    // say hello, Name
    this._printMessage(`${this._helloText}${this._name}`);
    return this._user;
  }
}
