export default class UI {
  static createAddTodoButton() {
    const mainTitle = document.querySelector(".main-title");
    mainTitle.innerHTML += `<button id="add-task-btn">+</button>`;
  }

  static homePage() {
    const mainTitle = document.querySelector(".main-title");
    mainTitle.innerHTML += `<h1 id="inbox">Inbox</h1>`;
    UI.createAddTodoButton();
  }
}
