let fSize = Array.from(document.getElementsByClassName("font-size"));
let bookContent = document.getElementById("book");

function deleteClass() {
  fSize.forEach((e) => {
    e.classList.remove("font-size_active");
    bookContent.classList.remove("font-size_big");
    bookContent.classList.remove("book_fs-small");
  });
}

fSize.forEach(
  (e) =>
    (e.onclick = () => {
      deleteClass();
      e.classList.toggle("font-size_active");

      if (e.classList.contains("font-size_small")) {
        bookContent.classList.add("book_fs-small");
      }
      if (e.classList.contains("font-size_big")) {
        bookContent.classList.add("font-size_big");
      }
      return false;
    })
);
