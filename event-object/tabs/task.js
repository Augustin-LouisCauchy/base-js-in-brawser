let tabs = Array.from(document.querySelectorAll(".tab"));
let tabContent = Array.from(document.querySelectorAll(".tab__content"));

function removeContent() {
  tabs.forEach((element) => {
    if (element.classList.contains("tab_active")) {
      element.classList.remove("tab_active");
    }
  });
  tabContent.forEach((element) => {
    if (element.classList.contains("tab__content_active")) {
      element.classList.remove("tab__content_active");
    }
  });
}
function getIndex() {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].onclick = () => {
      if (tabs[i].classList.contains("tab_active")) {
        return;
      } else {
        removeContent();
        tabs[i].classList.add("tab_active");
        tabContent[i].classList.add("tab__content_active");
      }
    };
  }
}
getIndex();
