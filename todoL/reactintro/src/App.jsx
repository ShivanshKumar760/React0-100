/*eslint-disable*/
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function submitHandler(
  e,
  setTaskList,
  task,
  setCheckCompleted,
  isCompleted,
  taskList
) {
  e.preventDefault();
  console.log(task);
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i] === task) {
      alert("Task already exists");
      return;
    }
  }
  setTaskList((prev) => [...prev, task]);

  if (isCompleted) {
    setCheckCompleted(true);
  } else {
    setCheckCompleted(false);
  }
}
function FormComponent(props) {
  const [task, setTask] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  return (
    <form
      onSubmit={(e) =>
        submitHandler(
          e,
          props.setTaskList,
          task,
          props.setCheckCompleted,
          isCompleted,
          props.taskList
        )
      }
    >
      <label htmlFor="Task">Task:</label>
      <input
        type="text"
        id="Task"
        name="Task"
        onChange={(e) => {
          console.log(e.target.value);
          setTask(e.target.value);
        }}
      />
      <button type="radio" onClick={() => setIsCompleted(!isCompleted)}>
        Task Inital status when adding: {isCompleted ? "Complete" : "Pending"}
      </button>
      <button type="submit">Add Task</button>
    </form>
  );
}
function App() {
  const [count, setCount] = useState(0);
  const [taskList, setTaskList] = useState([]);
  const [checkCompleted, setCheckCompleted] = useState(true);
  return (
    <>
      <h1 style={{ backgroundColor: "red" }}>
        Hello {checkCompleted ? "Hey" : "No"}
      </h1>
      <FormComponent
        setTaskList={setTaskList}
        setCheckCompleted={setCheckCompleted}
        taskList={taskList}
      />
      <ul>
        {taskList?.map((task, index) => (
          <li key={index}>
            {task}{" "}
            <button
              onClick={() => {
                setCheckCompleted(!checkCompleted);
              }}
            >
              {checkCompleted ? "Completed" : "Pending"}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
