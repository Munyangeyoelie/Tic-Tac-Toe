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
