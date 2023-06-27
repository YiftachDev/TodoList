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

  static handleForm(taskClass, inbox) {
    const task = {
      title: document.querySelector("#task-name").value,
      deadLine: document.querySelector("#date").value,
      priority: document.querySelector("#priority").value,
      description: document.querySelector("#description").value,
    };
    let todo = new taskClass(
      task.title,
      task.description,
      task.deadLine,
      task.priority
    );
    inbox.addTodo(todo);
    console.log(inbox.tasks);
    UI.closeTaskForm();
  }
}
