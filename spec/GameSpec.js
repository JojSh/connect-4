describe("Game", function() {

    it("should be initialized with a 6x7 board", function() {
      var game = new Game();

      expect(game.board.length).toEqual(7);
      expect(game.board[0].length).toEqual(6);

    });

});
