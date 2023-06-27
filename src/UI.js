export default class UI {
  static createAddTodoButton() {
    const mainTitle = document.querySelector(".main-title");
    mainTitle.innerHTML += `<button id="open-form-btn">+</button>`;
  }

  static homePage() {
    const mainTitle = document.querySelector(".main-title");
    mainTitle.innerHTML += `<h1 id="inbox">Inbox</h1>`;
    UI.createAddTodoButton();
  }

  static openTaskForm() {
    const addTaskForm = document.querySelector(".form");
    addTaskForm.style.display = "block";
  }

  static closeTaskForm() {
    const addTaskForm = document.querySelector(".form");
    addTaskForm.style.display = "none";
  }
}
