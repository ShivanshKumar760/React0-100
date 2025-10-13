/*eslint-disable*/
import React from "react";
import styles from "../styles/style";
import { useParams, useNavigate } from "react-router-dom";
function CalculationResult() {
  const { expression } = useParams();
  const navigate = useNavigate();

  const calculateResult = () => {
    try {
      // Basic validation - only allow numbers and operators
      if (!/^[\d+\-*/().]+$/.test(expression)) {
        return {
          error:
            "Invalid expression. Only numbers and +, -, *, / operators are allowed.",
        };
      }

      // Calculate using Function constructor
      const result = Function('"use strict"; return (' + expression + ")")();

      if (!isFinite(result)) {
        return { error: "Result is not a valid number" };
      }

      return { result: result };
    } catch (error) {
      return { error: "Invalid expression" };
    }
  };

  const { result, error } = calculateResult();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📊 Calculation Result</h1>

      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "1.5rem",
          borderRadius: "8px",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{ fontSize: "0.9rem", color: "#666", marginBottom: "0.5rem" }}
        >
          Expression:
        </div>
        <div style={styles.expression}>
          {expression.replace(/\*/g, "×").replace(/\//g, "÷")}
        </div>
      </div>

      {error ? (
        <div style={styles.errorBox}>
          <div
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
            }}
          >
            Error:
          </div>
          <div>{error}</div>
        </div>
      ) : (
        <div style={styles.resultBox}>
          <div
            style={{
              fontSize: "0.9rem",
              color: "#666",
              marginBottom: "0.5rem",
            }}
          >
            Answer:
          </div>
          <div style={styles.resultNumber}>{result}</div>
        </div>
      )}

      <div>
        <button onClick={() => navigate("/")} style={styles.backButton}>
          ← Back to Home
        </button>
        <button onClick={() => navigate(-1)} style={styles.button}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default CalculationResult;
