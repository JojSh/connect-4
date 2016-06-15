describe("Game", function() {

    it("should be initialized with a 6x7 board", function() {
      var game = Object.create(Game);
      game.setBoard([0,0,0,0,0,0,0],0,0,0,0,0);

      expect(game.board.length).toEqual(7);

    });

});
