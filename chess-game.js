'use strict';

const chess = new require('chess.js').Chess();

const Chessboard = {

    chess,
    board: chess.ascii(),
    white_king: '\u2654',
    black_king: '\u265A',
    fen: chess.fen(),

    respond: (message) => {
        return new Promise((resolve) => {
            let cmd = message.split(" ").slice(1);
            console.log("command: " + cmd);
            if (cmd == "show") {
                //console.log(Chessboard.some_ascii);
                // resolve(Chessboard.black_king);
                resolve(Chessboard.board);
            }
            else {
                resolve(Chessboard.white_king);
            }
      });
    }
};

module.exports = Chessboard;
