var Game = {
  init: function() {
    this.board = [0,0,0,0,0,0,0];
  },
  getBoard: function() {
    return this.board.length;
  }
};

Game.setBoard = function(board) {
  this.init(board);
};
