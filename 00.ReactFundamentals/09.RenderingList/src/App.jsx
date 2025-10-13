import { useState } from "react";
import { people } from "./utils/data";
import { getImageUrl } from "./utils/utils";
import "./App.css";

function List() {
  const listItems = people.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

function App() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount((count) => count + 1);
  }
  return (
    <>
      <List />
      <p>Count: {count}</p>
      <button onClick={increment}>click me</button>
    </>
  );
}

export default App;
