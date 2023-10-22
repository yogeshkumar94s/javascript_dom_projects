// Dom Selection
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);

// Functions
function addTodo(e) {
  // prevent form from submitting
  e.preventDefault();
  // todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // Create Li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("new-todo");
  todoDiv.appendChild(newTodo);
  todoInput.value = "";
  // Create Check Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class='fa-solid fa-square-check'></i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  // Create Trash Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class='fa-solid fa-trash'></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  // Append to List
  todoList.appendChild(todoDiv);
}
