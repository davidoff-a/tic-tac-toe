class TicTacToe {
  constructor() {
    this.gameField = [
      [, , ,],
      [, , ,],
      [, , ,],
    ];
    this.currentSymbol = "x";
    // this.turns=0;
  }

  getCurrentPlayerSymbol() {
    return this.currentSymbol;
  }

  nextTurn(rowIndex, columnIndex) {
    if (!this.getFieldValue(rowIndex,columnIndex)) {
      if (this.currentSymbol === "x") {
        this.currentSymbol = "o";
      } else {
        this.currentSymbol = "x";
      }
      this.gameField[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
    }
    
  }

  isFinished() {}

  getWinner() {}

  noMoreTurns() {}

  isDraw() {}

  getFieldValue(rowIndex, colIndex) {
    if (!this.gameField[rowIndex][colIndex]){
      return null;
    } else {
      return this.gameField[rowIndex][colIndex];
    }
  }
}

module.exports = TicTacToe;
