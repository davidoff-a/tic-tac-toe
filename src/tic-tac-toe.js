class TicTacToe {
  constructor() {
    this.gameField = [
      [, , ,],
      [, , ,],
      [, , ,],
    ];
    this.currentSymbol = "x";
  }

  getCurrentPlayerSymbol() {
    return this.currentSymbol;
  }

  nextTurn(rowIndex, columnIndex) {
    this.gameField[i][j] = this.getCurrentPlayerSymbol();

    console.log(this.gameField);
  }

  isFinished() {}

  getWinner() {}

  noMoreTurns() {}

  isDraw() {}

  getFieldValue(rowIndex, colIndex) {
    return this.gameField[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
