import { useState } from "react";
import "./App.css";
function Form({ setTodoStatus, setTodo, todoStatus }) {
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
      {/* <select
        onChange={(e) =>
          setTodoStatus(() => {
            return e.target.value === "Completed" ? true : false;
          })
        }
        name="todos"
        id="todos"
      >
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select> */}
      {/* <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          setTodo((prev) => [...prev, { text: todoInput, completed: false }]);
          setTodoInput("");
        }}
      >
        Add Todo
      </button> */}

      <button type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
}

function ListRendering(props) {
  const handleStatus = (index) => {
    // setTodoStatus((prev) => break the functionality
    //   prev === "Pending" ? "Completed" : "Pending"
    // );
    const getTodo = props.todos[index];
    const updatedStatus =
      getTodo.todoStatus === "Pending" ? "Completed" : "Pending";
    const updatedTodo = { ...getTodo, todoStatus: updatedStatus };
    // const updatedTodos = [...props.todos];
    // updatedTodos[index] = updatedTodo;
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
function App() {
  const [todos, setTodos] = useState([]);
  // const [todoStatus, setTodoStatus] = useState(false);
  const [todoStatus, setTodoStatus] = useState("Pending");

  return (
    <>
      <h1>Welcome to a Global Todo List</h1>
      <Form
        setTodoStatus={setTodoStatus}
        setTodo={setTodos}
        todoStatus={todoStatus}
      />
      <ListRendering
        todos={todos}
        setTodoStatus={setTodoStatus}
        setTodos={setTodos}
      />
    </>
  );
}

export default App;
