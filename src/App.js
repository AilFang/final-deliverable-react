import Navigation from "./Navigation";
import Basemap from "./Basemap";
import "./index.css";
import About from "./About";
import Footer from "./Footer";
function App() {
  return (
    <>
      <Navigation />
      <a href="./Map">
        <div className="map-container">
          <Basemap className="basemap" />
        </div>
      </a>
      <About />
      <Footer />
    </>
  );
}

export default App;
