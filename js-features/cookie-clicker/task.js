const img = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
const speed = document.getElementById("clicker__speed");
let now = [];
img.onclick = () => {
    counter.textContent = Number(counter.textContent) + 1;
    if (counter.textContent % 2 == 0) {
        img.width -= 20;
        img.height -= 20;
    } else {
        img.width += 20;
        img.height += 20;

    }
    now.push(new Date());
    speed.textContent = +(now.length / ((now[now.length - 1] - now[0]) / 1000)).toFixed(2);
}