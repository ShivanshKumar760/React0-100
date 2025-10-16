import { useState } from "react";

export default function Form({ setTodoStatus, setTodo, todoStatus }) {
  const [todoInput, setTodoInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { todoInput, todoStatus };
    setTodo((prev) => [...prev, newTodo]);
    setTodoInput("");
  };
  return (
    <form>
      <label htmlFor="todo">Enter a new todo</label>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <select
        onChange={(e) => setTodoStatus(e.target.value)}
        name="todos"
        id="todos"
      >
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>

      <button type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
}
