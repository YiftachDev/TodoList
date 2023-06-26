export default class UI {
  static homePage() {
    const container = document.querySelector(".container");
    container.innerHTML += `<h1 id="inbox">Inbox</h1>`;
  }
}
