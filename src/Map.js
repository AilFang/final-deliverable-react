import Wild from "./Wild";
import Navigation from "./Navigation";
import Whole from "./Whole";
import Footer from "./Footer";
import Checkbox from "./Checkbox";
function Map() {
  return (
    <>
      <Navigation />
      <h1 className="title">School Map</h1>
      <div className="whole-container">
        <Whole />
      </div>

      <Footer />
    </>
  );
}

export default Map;
