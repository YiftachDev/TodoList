import UI from "./UI";
import { inbox } from "./Project";
import Task from "./Todo";

document.addEventListener("DOMContentLoaded", () => {
  UI.homePage();
  const openFormBtn = document.querySelector("#open-form-btn");
  const closeFormBtn = document.querySelector("#close-form-btn");
  const submitFormBtn = document.querySelector("#addTaskBtn");

  openFormBtn.addEventListener("click", () => {
    UI.openTaskForm();
  });

  submitFormBtn.addEventListener("click", e => {
    e.preventDefault();
    UI.handleForm(Task, inbox);
  });

  closeFormBtn.addEventListener("click", UI.closeTaskForm);
});
