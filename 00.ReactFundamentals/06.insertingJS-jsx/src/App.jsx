import { useState } from "react";

import "./App.css";

function App() {
  const [greeting, setGreeting] = useState("Hello Vite + React!");
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";
  const name = "Gregorio Y. Zara";
  function changeGreeting() {
    setGreeting((prev) => {
      return prev === "Hello Vite + React!"
        ? "Hello World!"
        : "Hello Vite + React!";
    });
  }

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  //to insert javascript expression in jsx use {}
  return (
    <>
      {/* like here in h1 we had to insert greeting
    variable  so we inserted in a curly braces*/}
      <h1>{greeting}</h1>
      {/* or like here i wanted to pass a js function 
      reference into the onClick event for button we 
      inserted in {} */}
      <button onClick={changeGreeting}>Change Greeting</button>
      <br />
      <br />
      <img className="avatar" src={avatar} alt={description} />
      <h2>{name}</h2>
      <h3>Current Time is :{time}</h3>
    </>
  );
}

export default App;
