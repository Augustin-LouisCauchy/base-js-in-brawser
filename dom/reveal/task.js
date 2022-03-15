const reveal = Array.from(document.getElementsByClassName("reveal"));
document.addEventListener("scroll", func);
function func() {
  reveal.forEach((element) => {
    let obj = ({ top, bottom, height } = element.getBoundingClientRect());
    if (obj.top > 0 && obj.bottom < window.outerHeight - obj.height) {
      element.classList.add("reveal_active");
    } else {
      element.classList.remove("reveal_active");
    }
  });
}
