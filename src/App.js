import Navigation from "./Navigation";
import Basemap from "./Basemap";
import "./index.css";
import About from "./About";
import Footer from "./Footer";
// sami -> aileen: be sure to remove unused imports
import Map from "./Map";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Navigation />

      <Link to="./Map">
        <div className="map-container">
          <Basemap className="basemap" />
        </div>
      </Link>
      <About />
      <Footer />
    </>
  );
}

export default App;
