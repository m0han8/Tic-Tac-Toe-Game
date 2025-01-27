const cells = document.querySelectorAll(".cell");
const result = document.getElementById("result");
const restartbutton = document.getElementById("restart");
let count = 0;

cells.forEach(function (cell, index) {
  cell.addEventListener("click", function () {
    if (cell.textContent === "") {
      if (count % 2 === 0) {
        cell.textContent = "X";
      } else {
        cell.textContent = "O";
      }
      count++;
    }
    if (checkwin()) {
      result.textContent = `Player ${cell.textContent === "X" ? "1" : "2"} Won!`;
    } else if (count === 9) {
      result.textContent = "Game Draw!!";
    }
  });
});

function checkwin() {
  const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let pattern of winpatterns) {
    const [a, b, c] = pattern;
    if (
      cells[a].textContent !== "" &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      return true;
    }
  }
  return false;
}

function resetGame() {
  cells.forEach(function (cell) {
    cell.textContent = "";
    cell.style.pointerEvents = "auto";
  });
  result.textContent = "";
  count = 0;
}

restartbutton.addEventListener("click", resetGame);
