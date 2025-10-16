import React from "react";
function ListRendering(props) {
  const handleStatus = (index) => {
    const getTodo = props.todos[index];
    const updatedStatus =
      getTodo.todoStatus === "Pending" ? "Completed" : "Pending";
    const updatedTodo = { ...getTodo, todoStatus: updatedStatus };

    props.setTodos((prev) =>
      prev.map((todo, i) => (i === index ? updatedTodo : todo))
    );
  };

  return props.todos.length === 0 ? (
    <h2>No todos available</h2>
  ) : (
    <ul>
      {props.todos.map((todo, index) => (
        <li key={index}>
          {todo.todoInput} -{" "}
          <button
            onClick={() => {
              handleStatus(index);
            }}
          >
            {todo.todoStatus}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ListRendering;
