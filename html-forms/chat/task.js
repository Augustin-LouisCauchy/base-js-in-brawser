const chatWidget = document.querySelector(".chat-widget");
const chatInput = document.getElementById("chat-widget__input");
const arrResponse = [
  "Добрый день!",
  "Все операторы заняты",
  "Нам не до вас",
  "Кто тут?",
];
const messages = document.getElementById("chat-widget__messages");

chatWidget.onclick = () => {
  chatWidget.classList.add("chat-widget_active");
};

function getRandomResponse() {
  let i = Math.floor(Math.random() * arrResponse.length);
  return arrResponse[i];
}

function time() {
  let date = new Date();
  let h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  let min =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  return h + ":" + min;
}

chatInput.addEventListener("keydown", function (event) {
  //event.preventDefault();
  if (event.keyCode === 13 && chatInput.value !== "") {
    messages.innerHTML +=
      `<div class="message message_client">
       <div class="message__time">` +
      time() +
      `</div>
       <div class="message__text">` +
      chatInput.value +
      `</div>
       </div>`;

    
    let xY = messages.scrollHeight;
    messages.scrollTo(0, xY);

    chatInput.value = "";
    setTimeout(() => {
      messages.innerHTML +=
        `<div class="message">
        <div class="message__time">` +
        time() +
        `</div>
        <div class="message__text">` +
        getRandomResponse() +
        `</div> 
        </div>`;
    }, 1000);
  }
});
//При активном окне чата и простое 30 секунд, робот должен задать вопрос в чат
chatInput.addEventListener("focus", function () {
  setTimeout(() => {
    messages.innerHTML +=
      `<div class="message">
    <div class="message__time">` +
      time() +
      `</div>
    <div class="message__text">` +
      "Чем помочь?" +
      `</div> 
    </div>`;
  }, 30000);
});
