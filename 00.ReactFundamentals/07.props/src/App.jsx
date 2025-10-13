import { useState } from "react";

import "./App.css";

function Welcome(props) {
  //passing the props object by default it has children prop
  return <div>{props.children}</div>;
}

function Avatar(props) {
  //passing the props object by default it has img,width,height
  //as we are passing these three props from App component
  return (
    <img
      className="avatar"
      src={props.img}
      alt="avatar"
      width={props.width}
      height={props.height}
    />
  );
}

function Greeting({ greeting, setGreeting }) {
  //destructuring props object and sending state and setState function
  function changeGreeting() {
    setGreeting((prev) => {
      return prev === "Hello" ? "Hi" : "Hello";
    });
  }
  return (
    <div>
      <h1>{greeting}</h1>
      <button onClick={changeGreeting}>Change Greeting</button>
    </div>
  );
}

function ShowTime({ time, isShow, toggleShow }) {
  //destructuring props object and sending state and  function reference
  return (
    <div>
      {isShow && <h1>{time}</h1>}
      <button onClick={toggleShow}>change</button>
    </div>
  );
}
function App() {
  const [greeting, setGreeting] = useState("Hello");
  const image = "https://i.imgur.com/1bX5QH6.jpg";
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isShow, setIsShow] = useState(true);
  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  function toggleShow() {
    setIsShow((prev) => !prev);
  }
  return (
    <>
      <Welcome>
        <h1>Hello World</h1>
        <h2>Welcome to React</h2>
      </Welcome>
      <Avatar img={image} height={100} width={100} />
      <Greeting greeting={greeting} setGreeting={setGreeting} />
      <ShowTime time={time} isShow={isShow} toggleShow={toggleShow} />
    </>
  );
}

export default App;
