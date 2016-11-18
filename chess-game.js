var Chess = require('chess.js');

function chessGame() {
  this.chess = new Chess();
  this.board = chess.ascii();
}

chessGame.prototype.respond = function (args) {
  let [cmd, ..otherArgs] = message.content.split(" ").slice(1);
  if (cmd === "show") {
    return this.board;    
  }
}
