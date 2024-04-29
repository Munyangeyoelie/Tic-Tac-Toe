const Gameboard = (() => {
  // the palce holder of the gameboard
  let gameboard = ["", "", "", "", "", "", "", "", ""];
  // what this function is it will get this gameboard and render them into HTML.
  const render = () => {
    let boardHTML = "";
    gameboard.forEach((square, index) => {
      boardHTML += `<div class="square" id=square-${index}">${square}</div>`;
    });
  };
  // The return of the function will be made here
  return {
    render,
  };
})();
const createPlayer = (name, mark) => {
  return {
    name,
    mark,
  };
};
// logic of hwo the game will be played
const Game = (() => {
  let players = [];
  let currentPlayerIndex;
  let gameOver;
  const start = () => {
    players = [
      createPlayer(document.querySelector("#player1").value, "X"),
      createPlayer(document.querySelector("#player2").value, "0"),
    ];
    currentPlayerIndex = 0;
    gameOver = false;
    Gameboard.render();
  };
  return {
    start,
  };
})();

const startBtn = document.querySelector("#start-button");
startBtn.addEventListener("click", () => {
  Game.start();
});
const restartBtn = document.querySelector("#restart-button");

restartBtn.addEventListener("click", () => {
  //   alert("Restart
});
