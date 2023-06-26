import UI from "./UI";

document.addEventListener("DOMContentLoaded", () => {
  UI.homePage();
  const openFormBtn = document.querySelector("#open-form-btn");
  openFormBtn.addEventListener("click", UI.openTaskForm);
});
