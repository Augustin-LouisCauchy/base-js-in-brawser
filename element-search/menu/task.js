// TASK 2________________________________________________________________
let links = Array.from(document.querySelectorAll(".menu__link"));

links.forEach((link) => {
  const parent = link.parentElement;

  link.onclick = function () {
    const parent = link.parentElement;

    if (parent.querySelector(".menu_sub")) {
      parent.querySelector(".menu_sub").classList.toggle("menu_active");
    }
    if (parent.querySelector(".menu_sub")) {
      return false;
    }
  };
});

