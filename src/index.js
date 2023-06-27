import UI from "./UI";

document.addEventListener("DOMContentLoaded", () => {
  UI.homePage();
  const openFormBtn = document.querySelector("#open-form-btn");
  const closeFormBtn = document.querySelector("#close-form-btn");
  openFormBtn.addEventListener("click", UI.openTaskForm);
  closeFormBtn.addEventListener("click", UI.closeTaskForm);
});
