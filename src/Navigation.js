import "./Navigation.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">
        <img class="logo" src="../images/ecos-logo.png" />
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/map">Map</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        <li>
          <Link to="/activities">Activities</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
