import UI from "./UI";
import Project from "./Project";
import { inbox } from "./Project";
import Task from "./Todo";

document.addEventListener("DOMContentLoaded", () => {
  UI.homePage();
  const openFormBtn = document.querySelector("#open-form-btn");
  const closeFormBtn = document.querySelectorAll(".close-form-btn");
  const submitFormBtn = document.querySelector("#addTaskBtn");
  const submitEditFormBtn = document.querySelector("#editTaskBtn");
  const openAddProjectFormBtn = document.querySelector("#openAddProjectForm");
  const closeProjectForm = document.querySelector("#cancel-btn");
  const addProjectBtn = document.querySelector("#add-project-btn");
  const projects = [];

  openFormBtn.addEventListener("click", () => {
    UI.openTaskForm();
  });

  submitFormBtn.addEventListener("click", e => {
    e.preventDefault();
    UI.handleForm(Task, inbox);
  });

  closeFormBtn.forEach(btn => {
    btn.addEventListener("click", UI.closeTaskForm);
  });

  submitEditFormBtn.addEventListener("click", () => {
    UI.handleEditForm(inbox);
    console.log("test");
  });

  openAddProjectFormBtn.addEventListener("click", UI.displayAddProjectForm);

  closeProjectForm.addEventListener("click", UI.closeProjectForm);

  addProjectBtn.addEventListener("click", () => {
    let project = UI.createProject(Project, projects);
    if (project == null) return;
    projects.push(project);
    console.log(projects);
  });
});
