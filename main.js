const Gameboard = (() => {
  let gameboard = ["", "", "", "", "", "", "", "", ""];
  const render = () => {
    let boardHTML = "";
    gameboard.forEach((square, index) => {
      boardHTML += `<div class="square" id=square-${index}">${square}</div>`;
    });
  };
  document.querySelector("#gameboard").innerHTML = boardHTML;

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
const Game = () => {
  let players = [];
  let currentPlayerIndex;
  let gameOver = false;
  const start = () => {
    players = [
      createPlayer(document.querySelector("#player1").value, "X"),
      createPlayer(document.querySelector("#player2").value, "0"),
    ];
    currentPlayerIndex = 0;
  };
};

const startBtn = document.querySelector("#start-button");
startBtn.addEventListener("click", () => {
  //   alert("Start");
});
const restartBtn = document.querySelector("#restart-button");

restartBtn.addEventListener("click", () => {
  //   alert("Restart");
});
