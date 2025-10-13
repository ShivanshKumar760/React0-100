import { useState } from "react";

import "./App.css";
function Item({ name, isPacked }) {
  if (isPacked) {
    //now here we are doing conditional rendering and we are checking
    //if isPacked is true then we are returning the item with a check mark
    return <li className="item">{name} ☑️</li>;
  }
  return <li className="item">{name}</li>;
}

function TernaryStatus({ isPacked }) {
  return <p>{isPacked ? "✔️ Button Working" : "❌  Button Not Working"}</p>;
}
function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PackingList />
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        please press button
      </button>
      <TernaryStatus isPacked={true} />
    </>
  );
}

export default App;
