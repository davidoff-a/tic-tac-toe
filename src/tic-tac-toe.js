class TicTacToe {
  constructor() {
    this.gameField = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.currentSymbol = "x";
  }

  getCurrentPlayerSymbol() {
    return this.currentSymbol;
  }

  nextTurn(rowIndex, columnIndex) {
    if (!this.gameField[rowIndex][columnIndex]) {
      this.gameField[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
      if (this.currentSymbol === "x") {
        this.currentSymbol = "o";
      } else {
        this.currentSymbol = "x";
      }
      
    }
    this.isFinished();
    this.getWinner();
    this.noMoreTurns();
    this.isDraw();
    this.getFieldValue(rowIndex, columnIndex);
    this.getCurrentPlayerSymbol();

  }

  isFinished() {
    if (this.getWinner()||this.noMoreTurns()) {
      return true;
    } else {
      return false;
    }
  }

  getWinner() {
    for (let i = 0; i < 3; i++) {
      if (
        this.gameField[i][0] === this.gameField[i][1] &&
        this.gameField[i][0] === this.gameField[i][2]
      ) {
        return this.gameField[i][0];
      }
    }
    for (let i = 0; i < 3; i++) {
      if (
        this.gameField[0][i] === this.gameField[1][i] &&
        this.gameField[0][i] === this.gameField[2][i]
      ) {
        return this.gameField[0][i];
      }
    }
    if (
      this.gameField[0][0] === this.gameField[1][1] &&
      this.gameField[0][0] === this.gameField[2][2]
    ) {
      return this.gameField[0][0];
    }
    if (
      this.gameField[1][1] === this.gameField[0][2] &&
      this.gameField[1][1] === this.gameField[2][0]
    ) {
      return this.gameField[1][1];
    }
    return null;
  }

  noMoreTurns() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!this.gameField[i][j]) {
          return false;
        }
      }
    }
    return true;
  }

  isDraw() {
    if (!this.isFinished()||this.getWinner()){
      return false;
    } else {
      return true;
    }
    
  }

  getFieldValue(rowIndex, colIndex) {
    return this.gameField[rowIndex][colIndex];
    // if (!this.gameField[rowIndex][colIndex]) {
    //   return null;
    // } else {
      
    //   return this.gameField[rowIndex][colIndex];
    // }
  }
}

module.exports = TicTacToe;
