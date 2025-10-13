import styles from "../styles/style";
import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const [expression, setExpression] = React.useState("");

  const handleCalculate = () => {
    if (expression.trim()) {
      navigate(`/calc/${expression}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCalculate();
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📱 Parameter Calculator</h1>

      <div style={styles.infoBox}>
        <h2>How it works:</h2>
        <p>Enter a calculation expression in the URL to get instant results!</p>
        <div style={{ marginTop: "1rem" }}>
          <div style={{ marginBottom: "0.5rem" }}>
            <span style={styles.code}>/calc/2+2</span> → Shows result:{" "}
            <strong>4</strong>
          </div>
          <div style={{ marginBottom: "0.5rem" }}>
            <span style={styles.code}>/calc/2-2</span> → Shows result:{" "}
            <strong>0</strong>
          </div>
          <div style={{ marginBottom: "0.5rem" }}>
            <span style={styles.code}>/calc/3*4</span> → Shows result:{" "}
            <strong>12</strong>
          </div>
          <div>
            <span style={styles.code}>/calc/20/4</span> → Shows result:{" "}
            <strong>5</strong>
          </div>
        </div>
      </div>

      <h3>Try a calculation:</h3>
      <div style={styles.inputGroup}>
        <input
          type="text"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="e.g., 2+2 or 10-5"
          style={styles.input}
        />
        <button onClick={handleCalculate} style={styles.button}>
          Calculate
        </button>
      </div>

      <h3>Supported Operations:</h3>
      <ul>
        <li>Addition (+)</li>
        <li>Subtraction (-)</li>
        <li>Multiplication (*)</li>
        <li>Division (/)</li>
      </ul>

      <h3>Quick Examples:</h3>
      <button onClick={() => navigate("/calc/15+25")} style={styles.exampleBtn}>
        15 + 25
      </button>
      <button
        onClick={() => navigate("/calc/100-42")}
        style={styles.exampleBtn}
      >
        100 - 42
      </button>
      <button onClick={() => navigate("/calc/7*8")} style={styles.exampleBtn}>
        7 × 8
      </button>
      <button onClick={() => navigate("/calc/50/2")} style={styles.exampleBtn}>
        50 ÷ 2
      </button>
    </div>
  );
}

export default Home;
