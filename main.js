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
  let currentPlayerIndex = 0;
  let gameOver = false;
  const start = () => {
    players = [{}, {}];
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
