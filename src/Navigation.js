import logo from "./logo.svg";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav-links">
      <header className="App-header">
        <a href="/">
          {" "}
          <img class="logo" src="../images/ecos-logo.png" />
        </a>
        <a href="/Map/">Map</a>
        <a href="/Resources/">Resources</a>
      </header>
    </div>
  );
}

export default Navigation;
