import styles from "../styles/style";
function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>ℹ️ About</h1>

      <p
        style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "2rem" }}
      >
        This is a <strong>Parameter Calculator</strong> built with React Router
        to demonstrate dynamic routing and URL parameters.
      </p>

      <div
        style={{
          ...styles.infoBox,
          backgroundColor: "#f3e5f5",
          borderColor: "#9c27b0",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Features:</h2>
        <ul style={{ lineHeight: "1.8" }}>
          <li>URL-based calculations using route parameters</li>
          <li>
            Support for addition, subtraction, multiplication, and division
          </li>
          <li>Clean and responsive user interface</li>
          <li>
            Navigation using React Router's useNavigate and useParams hooks
          </li>
        </ul>
      </div>

      <div
        style={{
          backgroundColor: "#fff3e0",
          border: "2px solid #ff9800",
          borderRadius: "8px",
          padding: "1.5rem",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Technical Stack:</h2>
        <ul style={{ lineHeight: "1.8" }}>
          <li>
            <strong>React</strong> - UI framework
          </li>
          <li>
            <strong>React Router DOM</strong> - Client-side routing
          </li>
          <li>
            <strong>Pure CSS</strong> - Inline styling
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
