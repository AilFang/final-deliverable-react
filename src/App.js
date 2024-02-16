import Navigation from "./Navigation";
import Basemap from "./Basemap";
import "./index.css";
import About from "./About";

function App() {
  return (
    <>
      <Navigation />
      <div className="map-container">
        <Basemap className="basemap" />
      </div>
      <About />
    </>
  );
}

export default App;
