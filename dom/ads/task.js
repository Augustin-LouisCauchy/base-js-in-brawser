let rotator = Array.from(document.getElementsByClassName("rotator__case"));
let index = rotator.findIndex((e) =>
  e.classList.contains("rotator__case_active")
);
setInterval(() => {
  rotator[index].classList.remove("rotator__case_active");
  index++;
  if (index === rotator.length) {
    index = 0;
  }
  rotator[index].style.color = rotator[index].dataset.color;
  rotator[index].classList.add("rotator__case_active");
}, rotator[index].dataset.speed);
