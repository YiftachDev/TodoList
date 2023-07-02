/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   inbox: () => (/* binding */ inbox)\n/* harmony export */ });\nclass Project {\r\n  constructor(name) {\r\n    this.name = name;\r\n    this.tasks = [];\r\n  }\r\n  addTodo(task) {\r\n    this.tasks.push(task);\r\n  }\r\n  deleteTask(task) {\r\n    let taskIndex = this.tasks.indexOf(task);\r\n    this.tasks.splice(taskIndex, 1);\r\n  }\r\n  findTask(taskTitle) {\r\n    for (const task of this.tasks) {\r\n      if (task.title == taskTitle.toLowerCase()) {\r\n        return task;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nlet inbox = new Project(\"inbox\");\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/Project.js?");

/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n  constructor(title, description, deadline, priority) {\r\n    this.title = title;\r\n    this.description = description;\r\n    this.deadline = deadline;\r\n    this.priority = priority;\r\n  }\r\n\r\n  edit(title, description, deadline, priority) {\r\n    this.title = title;\r\n    this.description = description;\r\n    this.deadline = deadline;\r\n    this.priority = priority;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todolist/./src/Todo.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\nclass UI {\r\n  static taskTitle;\r\n\r\n  static createAddTodoButton() {\r\n    const mainTitle = document.querySelector(\".main-title\");\r\n    mainTitle.innerHTML += `<button id=\"open-form-btn\">+</button>`;\r\n  }\r\n\r\n  static homePage() {\r\n    const mainTitle = document.querySelector(\".main-title\");\r\n    mainTitle.innerHTML += `<h1 id=\"inbox\">Inbox</h1>`;\r\n    UI.createAddTodoButton();\r\n  }\r\n\r\n  static openTaskForm() {\r\n    const addTaskForm = document.querySelector(\".form\");\r\n    addTaskForm.style.display = \"block\";\r\n  }\r\n\r\n  static closeTaskForm() {\r\n    const forms = document.querySelectorAll(\".form\");\r\n    forms.forEach(form => (form.style.display = \"none\"));\r\n  }\r\n\r\n  static handleForm(taskClass, inbox) {\r\n    const task = {\r\n      title: document.querySelector(\"#add-task-name\").value,\r\n      deadLine: document.querySelector(\"#add-date\").value,\r\n      priority: document.querySelector(\"#add-priority\").value,\r\n      description: document.querySelector(\"#add-description\").value,\r\n    };\r\n    let todo = new taskClass(\r\n      task.title,\r\n      task.description,\r\n      task.deadLine,\r\n      task.priority\r\n    );\r\n    inbox.addTodo(todo);\r\n    UI.closeTaskForm();\r\n    UI.loadTasks(inbox);\r\n  }\r\n\r\n  static loadTasks(project) {\r\n    const mainDiv = document.querySelector(\".main-content\");\r\n    UI.clearTasks(mainDiv);\r\n    for (const task of project.tasks) {\r\n      const taskElement = document.createElement(\"div\");\r\n      taskElement.classList.add(\"task\");\r\n      taskElement.innerHTML = `\r\n    <div class=\"check-box-div\">\r\n      <form id=\"checkbox-form\">\r\n      </form>\r\n    </div>\r\n    <div class=\"task-content\">\r\n      <h2 class=\"task-title\">${\r\n        task.title.charAt(0).toUpperCase() + task.title.slice(1)\r\n      }</h2>\r\n      <p class=\"task-description\">${task.description}</p>\r\n    </div>\r\n    <div class=\"task-info\">\r\n      <p class=\"task-deadline\">${task.deadline}</p>\r\n      <p class=\"task-priority\">${task.priority} priority</p>\r\n      <div class=\"task-actions\">\r\n      </div>\r\n    </div>\r\n      `;\r\n      mainDiv.appendChild(taskElement);\r\n      const taskActionsAll = document.querySelectorAll(\".task-actions\");\r\n      const lastTaskActions = taskActionsAll.item(taskActionsAll.length - 1);\r\n      const editButton = document.createElement(\"button\");\r\n      editButton.classList.add(\"edit-button\");\r\n      editButton.textContent = \"Edit\";\r\n      editButton.onclick = () => {\r\n        UI.openEditTaskForm(task);\r\n        UI.taskTitle = task.title;\r\n      };\r\n      lastTaskActions.appendChild(editButton);\r\n      const deleteButton = document.createElement(\"button\");\r\n      deleteButton.classList.add(\"delete-button\");\r\n      deleteButton.textContent = \"Delete\";\r\n      deleteButton.onclick = () => UI.removeTask(project, task);\r\n      lastTaskActions.appendChild(deleteButton);\r\n      mainDiv.appendChild(taskElement);\r\n      const checkboxInput = document.createElement(\"input\");\r\n      checkboxInput.type = \"checkbox\";\r\n      checkboxInput.onchange = () => UI.checked(checkboxInput, taskElement);\r\n      const checkBoxForm = document.querySelector(\"#checkbox-form\");\r\n      checkBoxForm.appendChild(checkboxInput);\r\n    }\r\n  }\r\n\r\n  static removeTask(project, task) {\r\n    project.deleteTask(task);\r\n    UI.loadTasks(project);\r\n  }\r\n\r\n  static clearTasks(mainDiv) {\r\n    const tasksToRemove = [];\r\n    for (const child of mainDiv.children) {\r\n      if (child.className === \"task\") {\r\n        tasksToRemove.push(child);\r\n      }\r\n    }\r\n    for (const taskToRemove of tasksToRemove) {\r\n      mainDiv.removeChild(taskToRemove);\r\n    }\r\n  }\r\n\r\n  static openEditTaskForm(task) {\r\n    const editTaskForm = document.querySelector(\"#editTaskForm\");\r\n    document.querySelector(\"#task-name\").value = task.title;\r\n    document.querySelector(\"#date\").value = task.deadline;\r\n    document.querySelector(\"#priority\").value = task.priority;\r\n    document.querySelector(\"#description\").value = task.description;\r\n    editTaskForm.style.display = \"block\";\r\n  }\r\n\r\n  static handleEditForm(project) {\r\n    const editTaskForm = document.querySelector(\"#editTaskForm\");\r\n    const task = project.findTask(UI.taskTitle);\r\n    task.edit(\r\n      document.querySelector(\"#task-name\").value,\r\n      document.querySelector(\"#description\").value,\r\n      document.querySelector(\"#date\").value,\r\n      document.querySelector(\"#priority\").value\r\n    );\r\n    editTaskForm.style.display = \"none\";\r\n    UI.loadTasks(project);\r\n  }\r\n\r\n  static checked(checkbox, taskEl) {\r\n    if (checkbox.checked == true) {\r\n      taskEl.style.background = \"silver\";\r\n    } else {\r\n      taskEl.style.background = \"#ffffff\";\r\n    }\r\n  }\r\n\r\n  static displayAddProjectForm() {\r\n    const form = document.querySelector(\"#add-project-form\");\r\n    form.style.display = \"block\";\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todolist/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Todo */ \"./src/Todo.js\");\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  _UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].homePage();\r\n  const openFormBtn = document.querySelector(\"#open-form-btn\");\r\n  const closeFormBtn = document.querySelectorAll(\".close-form-btn\");\r\n  const submitFormBtn = document.querySelector(\"#addTaskBtn\");\r\n  const submitEditFormBtn = document.querySelector(\"#editTaskBtn\");\r\n  const openAddProjectFormBtn = document.querySelector(\"#openAddProjectForm\");\r\n\r\n  openFormBtn.addEventListener(\"click\", () => {\r\n    _UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openTaskForm();\r\n  });\r\n\r\n  submitFormBtn.addEventListener(\"click\", e => {\r\n    e.preventDefault();\r\n    _UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].handleForm(_Todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _Project__WEBPACK_IMPORTED_MODULE_1__.inbox);\r\n  });\r\n\r\n  closeFormBtn.forEach(btn => {\r\n    btn.addEventListener(\"click\", _UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].closeTaskForm);\r\n  });\r\n\r\n  submitEditFormBtn.addEventListener(\"click\", () => {\r\n    _UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].handleEditForm(_Project__WEBPACK_IMPORTED_MODULE_1__.inbox);\r\n    console.log(\"test\");\r\n  });\r\n\r\n  openAddProjectFormBtn.addEventListener(\"click\", _UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayAddProjectForm);\r\n});\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;