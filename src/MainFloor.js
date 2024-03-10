import MainMap from "./MainMap";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Checkbox from "./Checkbox";

function MainFloor() {
  return (
    <>
      <Navigation></Navigation>
      <div className="whole-container">
        <MainMap></MainMap>
      </div>
      <Checkbox label="MLLH" />
      <Checkbox label="Main Office" />
      <Checkbox label="Orchestra Room" />
      <Checkbox label="Counseling Office" />
      <Checkbox label="SRC" />
      <Checkbox label="Band Room" />
      <Checkbox label="Chorus Room" />
    </>
  );
}

export default MainFloor;
