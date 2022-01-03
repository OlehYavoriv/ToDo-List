const today = new Date();
const options = { weekday: "long", month: "long", day: "numeric" };
document.querySelector("h1").innerText =
  "Today is " + today.toLocaleDateString("en-US", options);

const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");

todoForm.addEventListener("submit", formHandler);

function formHandler(event) {
  event.preventDefault();

  const taskText = todoInput.value;

  const newTask = document.createElement("li");
  newTask.innerText = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("role", "button");
  deleteBtn.style["margin-left"] = "15px";
  deleteBtn.style["cursor"] = "pointer";
  deleteBtn.style["background"] = "url(./image/remove.svg)";
  deleteBtn.style["border"] = "none";
  deleteBtn.style["backgroundSize"] = "cover";
  deleteBtn.style["backgroundRepeat"] = "no-repeat";
  deleteBtn.style["width"] = "15px";
  deleteBtn.style["height"] = "15px";

  deleteBtn.addEventListener("click", deleteTask);

  newTask.append(deleteBtn);

  todoList.append(newTask);

  todoInput.value = "";

  todoInput.focus();
}

function deleteTask() {
  this.closest("li").remove();
}
