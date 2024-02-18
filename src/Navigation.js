import "./Navigation.css";

function Navigation() {
  return (
    <nav>
      <a href="/">
        {" "}
        <img class="logo" src="../images/ecos-logo.png" />
      </a>
      <ul className="nav-links">
        <li>
          <a href="/Wild/">Map</a>
        </li>
        <li>
          <a href="/Resources/">Resources</a>
        </li>
        <li>
          <a href="/Activities">Activities</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
