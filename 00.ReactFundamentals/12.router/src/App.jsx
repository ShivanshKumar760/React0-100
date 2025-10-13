// import { useState } from "react";
import styles from "./styles/style";
import Home from "./pages/Home";
import About from "./pages/About";
import CalculationResult from "./pages/CalculationResult";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Naviagtion";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div style={styles.body}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/calc/:expression" element={<CalculationResult />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
