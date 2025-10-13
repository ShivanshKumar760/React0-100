import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
function Form({ setCat }) {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const category = e.target.category.value;
          console.log(category);
          setCat(category);
        }}
      >
        <label>Category</label>
        <select name="category" id="category">
          <option value="Any">Any</option>
          <option value="Custom">Custom</option>
        </select>
        <button type="submit">Set Category</button>
      </form>
    </>
  );
}
function JokeForm({ parameters, setParameters, blacklist, setBlacklist, cat }) {
  return (
    <>
      {cat === "Custom" && (
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const param = e.target.param.value;
              console.log(param);
              setParameters([...parameters, param]);
            }}
          >
            <label>Parameter</label>
            <input type="text" name="param" id="param" />
            <button type="submit">Add Parameter</button>
          </form>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const bl = e.target.blacklist.value;
              console.log(bl);
              setBlacklist([...blacklist, bl]);
            }}
          >
            <label>Blacklist</label>
            <input type="text" name="blacklist" id="blacklist" />
            <button type="submit">Add Blacklist</button>
          </form>
        </div>
      )}
    </>
  );
}
function App() {
  const [jokeList, setJokeList] = useState([]);
  const [parameters, setParameters] = useState([]);
  const [blacklist, setBlacklist] = useState([]);
  const [cat, setCat] = useState("None");

  useEffect(() => {
    if (cat === "Custom" && parameters.length > 0 && blacklist.length > 0) {
      console.log(parameters);
      console.log(blacklist);
      let url = "https://v2.jokeapi.dev/joke/";
      url += parameters.join(",");
      if (blacklist.length > 0) {
        url += "?blacklistFlags=" + blacklist.join(",");
      }
      console.log(url);
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.type === "twopart") {
            setJokeList([data.setup, data.delivery]);
            return;
          }
          console.log(data);
          setJokeList([data.joke]);
        })
        .catch((error) => console.error("Error fetching jokes:", error));
      return;
    } else if (cat == "Any") {
      fetch("https://v2.jokeapi.dev/joke/Any")
        .then((response) => response.json())
        .then((data) => {
          if (data.type === "twopart") {
            setJokeList([data.setup, data.delivery]);
            return;
          }
          console.log(data);
          setJokeList([data.joke]);
        })
        .catch((error) => console.error("Error fetching jokes:", error));
    }
  }, [parameters, blacklist, cat]);

  return (
    <>
      <Form setCat={setCat} />
      <JokeForm
        parameters={parameters}
        setParameters={setParameters}
        blacklist={blacklist}
        setBlacklist={setBlacklist}
        cat={cat}
      />
      <div>
        {jokeList.map((joke, index) => (
          <p key={index}>{joke}</p>
        ))}
      </div>
    </>
  );
}

export default App;
