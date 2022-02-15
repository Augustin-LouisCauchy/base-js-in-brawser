let deadMole = document.getElementById("dead");
let lostMole = document.getElementById("lost");

const holes = document.getElementsByClassName("hole-game");
console.log(holes[0].childElementCount);
for (let i = 1; i <= holes[0].childElementCount; i++) {
  const hole = document.getElementById(getHole(i));
  hole.onclick = () => {
    hole.className.includes("hole_has-mole")
      ? deadMole.textContent++
      : lostMole.textContent++;
    isWin(deadMole, lostMole);
  };
}

function getHole(index) {
  return `hole${index}`;
}

function isWin(deadMole, lostMole) {
  if (Number(deadMole.textContent) === 10) {
    alert("Вы выиграли");
    deadMole.textContent = 0;
    lostMole.textContent = 0;
  }
  if (Number(lostMole.textContent) === 5) {
    alert("Вы проиграли");
    deadMole.textContent = 0;
    lostMole.textContent = 0;
  }
}
