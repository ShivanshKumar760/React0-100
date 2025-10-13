import styles from "../styles/style";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navLinks}>
        <li>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={styles.navLink}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
