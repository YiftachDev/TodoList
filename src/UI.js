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
    console.log(task.deadLine);
    let todo = new taskClass(
      task.title,
      task.description,
      task.deadLine,
      task.priority
    );
    inbox.addTodo(todo);
    UI.closeTaskForm();
    UI.addTaskToPage(task);
  }

  static addTaskToPage(task) {
    const mainDiv = document.querySelector(".main-content");
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskElement.innerHTML = `
    <div class="task-content">
      <h2 class="task-title">${
        task.title.charAt(0).toUpperCase() + task.title.slice(1)
      }</h2>
      <p class="task-description">${task.description}</p>
    </div>
    <div class="task-info">
      <p class="task-deadline">${task.deadLine}</p>
      <p class="task-priority">${task.priority} priority</p>
      <div class="task-actions">
      <button class="edit-button">Edit</button>
      <button class="delete-button">Delete</button>
    </div>
    </div>
    `;
    mainDiv.appendChild(taskElement);
  }
}
