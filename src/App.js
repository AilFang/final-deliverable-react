import Navigation from "./Navigation";
import Basemap from "./Basemap";
import "./index.css";

function App() {
  return (
    <>
      <Navigation />
      <div className="map-container">
        <Basemap />
      </div>
    </>
  );
}

export default App;
