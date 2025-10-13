import "./App.css";

function App() {
  return (
    //a react component can only return a single element
    <>
      {/* style attribute is a js object and we need to wrap that js object in curly bracket */}
      <div className="awesome" style={{ border: "1px solid red" }}>
        <label htmlFor="name">Enter your name: </label>
        <input type="text" id="name" />
      </div>
      <p>Enter your HTML here</p>
    </>
  );
}

export default App;
