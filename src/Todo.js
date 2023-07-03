export default class Task {
  constructor(title, description, deadline, priority, checked) {
    this.title = title;
    this.description = description;
    this.deadline = deadline;
    this.priority = priority;
    this.checked = false;
  }

  edit(title, description, deadline, priority) {
    this.title = title;
    this.description = description;
    this.deadline = deadline;
    this.priority = priority;
  }
}
