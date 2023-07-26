export default class Validator {
  constructor(userName) {
    this.userName = userName;
  }

  validateUsername() {
    const patterns = {
      symbolsPattern: /^[\w\-_]*$/,
      beginEndingPattern: /^[^\d\-_].*[^\d\-_]$/,
      rowDigitsPattern: /\d{3}/,
    };
    const matchTable = [true, true, false];
    const testTable = [];
    for (const pattern in patterns) {
      /* istanbul ignore next */
      if (Object.hasOwn(patterns, pattern)) {
        testTable.push(patterns[pattern].test(this.userName));
      }
    }
    return JSON.stringify(testTable) === JSON.stringify(matchTable);
  }
}
