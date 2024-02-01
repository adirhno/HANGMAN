/** @format */

import React from "react";
import RestartBtn from "./RestartBtn";
import Characters from "./Characters";

export default function Gameover({restartGame,word}) {
  return<> <div className="gameOver">Game Over! Try Again</div>
  <Characters word={word} />
  <RestartBtn restartGame={restartGame} /></>;
}
