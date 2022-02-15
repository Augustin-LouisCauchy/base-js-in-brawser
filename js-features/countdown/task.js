const timer = document.getElementById("timer");
let calcTimer = () => {
    if (timer.textContent >= 0) {
        timer.textContent = Number(timer.textContent) - 1;
    }
    if (timer.textContent == 0) {
        setTimeout(() => {
            alert("Вы победили в конкурсе")
        })
    }
}

let interval = setInterval(calcTimer, 1000) 

