import Navigation from "./Navigation";
import WholeMap from "./WholeMap";
import Footer from "./Footer";
function Map() {
  return (
    <>
      <Navigation />
      <h1 className="title">School Map</h1>
      <div className="whole-container">
        <WholeMap />
      </div>

      <Footer />
    </>
  );
}

export default Map;
