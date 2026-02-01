const board = document.getElementById("board");
const numberDisplay = document.getElementById("number");

let nums = [];

for (let i = 1; i <= 25; i++) {
  let d = document.createElement("div");
  d.className = "cell";
  d.innerText = i;
  board.appendChild(d);
  nums.push(i);
}

function generate() {
  if (nums.length === 0) {
    numberDisplay.innerText = "Game Over";
    return;
  }
  let r = Math.floor(Math.random() * nums.length);
  numberDisplay.innerText = nums.splice(r, 1);
}
