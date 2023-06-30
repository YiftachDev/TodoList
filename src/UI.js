export default class UI {
  static taskTitle;

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
    const forms = document.querySelectorAll(".form");
    forms.forEach(form => (form.style.display = "none"));
  }

  static handleForm(taskClass, inbox) {
    const task = {
      title: document.querySelector("#add-task-name").value,
      deadLine: document.querySelector("#add-date").value,
      priority: document.querySelector("#add-priority").value,
      description: document.querySelector("#add-description").value,
    };
    let todo = new taskClass(
      task.title,
      task.description,
      task.deadLine,
      task.priority
    );
    inbox.addTodo(todo);
    UI.closeTaskForm();
    UI.loadTasks(inbox);
  }

  static loadTasks(project) {
    const mainDiv = document.querySelector(".main-content");
    UI.clearTasks(mainDiv);
    for (const task of project.tasks) {
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
        <p class="task-deadline">${task.deadline}</p>
        <p class="task-priority">${task.priority} priority</p>
        <div class="task-actions">
        </div>
      </div>
      `;
      mainDiv.appendChild(taskElement);
      const taskActionsAll = document.querySelectorAll(".task-actions");
      const lastTaskActions = taskActionsAll.item(taskActionsAll.length - 1);
      const editButton = document.createElement("button");
      editButton.classList.add("edit-button");
      editButton.textContent = "Edit";
      editButton.onclick = () => {
        UI.openEditTaskForm(task);
        UI.taskTitle = task.title;
      };
      lastTaskActions.appendChild(editButton);
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-button");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = () => UI.removeTask(project, task);
      lastTaskActions.appendChild(deleteButton);
      mainDiv.appendChild(taskElement);
    }
  }

  static removeTask(project, task) {
    project.deleteTask(task);
    UI.loadTasks(project);
  }

  static clearTasks(mainDiv) {
    const tasksToRemove = [];
    for (const child of mainDiv.children) {
      if (child.className === "task") {
        tasksToRemove.push(child);
      }
    }
    for (const taskToRemove of tasksToRemove) {
      mainDiv.removeChild(taskToRemove);
    }
  }

  static openEditTaskForm(task) {
    const editTaskForm = document.querySelector("#editTaskForm");
    document.querySelector("#task-name").value = task.title;
    document.querySelector("#date").value = task.deadline;
    document.querySelector("#priority").value = task.priority;
    document.querySelector("#description").value = task.description;
    editTaskForm.style.display = "block";
  }

  static handleEditForm(project) {
    const editTaskForm = document.querySelector("#editTaskForm");
    const task = project.findTask(UI.taskTitle);
    task.edit(
      document.querySelector("#task-name").value,
      document.querySelector("#description").value,
      document.querySelector("#date").value,
      document.querySelector("#priority").value
    );
    editTaskForm.style.display = "none";
    UI.loadTasks(project);
  }
}
