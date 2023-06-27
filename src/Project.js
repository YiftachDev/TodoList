class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
  addTodo(task) {
    this.tasks.push(task);
  }
}

let inbox = new Project("inbox");

export { inbox };
