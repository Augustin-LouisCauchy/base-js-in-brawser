const checkBoxes = Array.from(document.querySelectorAll(".interest__check"));
checkBoxes.forEach(
  (e) =>
    (e.onclick = () => {
      if (!e.closest(".interests_active")) {
        let current = Array.from(
          e
            .closest(".interest")
            .querySelector(".interests_active")
            .querySelectorAll(".interest__check")
        );
        if (e.checked) {
          current.forEach((element) => (element.checked = true));
        } else {
          current.forEach((element) => (element.checked = false));
        }
      }
    })
);
