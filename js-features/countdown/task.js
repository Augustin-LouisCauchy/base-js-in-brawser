const timer = document.getElementById("timer");
let calcTimer = setInterval(() => {
    timer.textContent = Number(timer.textContent) - 1;
    
    if (timer.textContent == 0 ) {
        alert("Вы победили в конкурсе!!!")
    } else if (timer.textContent <= 0) {
        clearInterval(calcTimer)
    }
}, 1000)