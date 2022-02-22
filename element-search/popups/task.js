// TASK 1 ___________________________________________________________________
let modalMain = document.getElementById("modal_main");
let modalSucces = document.getElementById("modal_success");
setTimeout(() => modalMain.classList.add("modal_active"), 500);
let close = Array.from(document.getElementsByClassName("modal__close"));
for (let i = 0; i < close.length; i++) {
  close[i].onclick = () => {
    if (close[i].classList.contains("show-success")) {
      modalSucces.classList.add("modal_active");
    }
    modalMain.classList.remove("modal_active");
  };
}
modalSucces.onclick = () => modalSucces.classList.remove("modal_active");

