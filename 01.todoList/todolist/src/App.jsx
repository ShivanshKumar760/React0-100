import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ListRendering from "./components/ListRendering";
function App() {
  const [todos, setTodos] = useState([]);
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
