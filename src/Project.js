class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
  addTodo(task) {
    this.tasks.push(task);
  }
  deleteTask(task) {
    let taskIndex = this.tasks.indexOf(task);
    this.tasks.splice(taskIndex, 1);
  }
}

let inbox = new Project("inbox");

export { inbox };
