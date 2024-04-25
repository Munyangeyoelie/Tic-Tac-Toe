const Gameboard = (() => {
  let gameboard = ["", "", "", "", "", "", "", "", ""];
  const render = () => {
    let boardHTML = "";
    gameboard.forEach((square, index) => {
      boardHTML += `<div class="square" id=square-${index}">${square}</div>`;
    });
  };
  document.querySelector("#gameboard").innerHTML = boardHTML;
})();

const startBtn = document.querySelector("#start-button");
startBtn.addEventListener("click", () => {
  //   alert("Start");
});
const restartBtn = document.querySelector("#restart-button");

restartBtn.addEventListener("click", () => {
  //   alert("Restart");
});
