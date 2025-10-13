//Creating  the container

let div = document.createElement("div");
div.id = "container";
document.body.appendChild(div);

//Creating the header
let header = document.createElement("h1");
header.innerText = "Todo List";
div.appendChild(header);

//Create the form

let form = document.createElement("form");
form.id = "todo-form";
div.appendChild(form);

//Creating the input field

let inputField = document.createElement("input");
inputField.type = "text";
inputField.id = "todo-input";
inputField.placeholder = "Enter a new todo";
form.appendChild(inputField);

//Creating the add button
let addButton = document.createElement("button");
addButton.type = "submit";
addButton.id = "add-button";
addButton.innerText = "Add";
form.appendChild(addButton);

//creating a list to hold the todos
let todoList = document.createElement("ul");
todoList.id = "todo-list";
div.appendChild(todoList);
//Array to hold todos
let todos = [];
//Function to render todos
function renderTodos() {
  //Clear the existing list
  todoList.innerHTML = "";
  //Loop through the todos array and create list items
  todos.forEach((todo, index) => {
    let listItem = document.createElement("li");
    listItem.className = "todo-item";
    listItem.innerText = todo;

    //Create a delete button for each todo
    let deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.innerText = "Delete";
    deleteButton.onclick = () => {
      todos.splice(index, 1);
      renderTodos();
    };

    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
  });
}
//Event listener for the form submission
form.onsubmit = (e) => {
  e.preventDefault();
  let newTodo = inputField.value.trim();
  if (newTodo) {
    todos.push(newTodo);
    inputField.value = "";
    renderTodos();
  }
};
//Initial render
renderTodos();
