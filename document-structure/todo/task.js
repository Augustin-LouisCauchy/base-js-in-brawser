const taskList = document.querySelector(".tasks__list");
const taskInput = document.getElementById("task__input");
const tasksAdd = document.getElementById("tasks__add");

tasksAdd.addEventListener("click", function (event) {
  if (taskInput.value.trim() !== "") {
    addTask(event);
  } else {
    event.preventDefault();
  }
});

taskInput.addEventListener("keydown", function (event) {
  if (event.keyCode === 13 && taskInput.value.trim() !== "") {
    addTask(event);
  }
});

function addTask(event) {
  taskList.insertAdjacentHTML(
    "beforeend",
    `<div class="task">
    <div class="task__title">` +
      taskInput.value +
      `</div><a href="#" class="task__remove">&times;</a>
    </div>`
  );
  taskInput.value = "";
  taskList.querySelectorAll(".task").forEach(
    (e) =>
      (e.onclick = () => {
        e.closest(".task").remove();
      })
  );
  event.preventDefault();
}
