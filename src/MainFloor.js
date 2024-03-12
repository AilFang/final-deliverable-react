import { useState, useEffect } from "react";
import MainMap from "./MainMap";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Checkbox from "./Checkbox";

function MainFloor() {

  // sami --> aileen
  // const [rooms, setRooms] = useState([])

  // useEffect(() => {
  //   setRooms([
  //     {
  //       id: '1',
  //       label: "Main Office",
  //       isChecked: false,
  //     },
  //     {
  //       id: '2',
  //       label: "Orchestra Room",
  //       isChecked: false,
  //     },
  //   ])
  // }, [])


  return (
    <>
      <Navigation></Navigation>
      <div className="whole-container">
        {/* <MainMap rooms={rooms}></MainMap> */}
        <MainMap></MainMap>
      </div>

      {/* {rooms.map((room) => {
        return (
          <Checkbox label={room.label} checked={room.isChecked} setRooms={setRooms}/>
        )
      })} */}


      <Checkbox label="MLLH" />
      <Checkbox label="Main Office" />
      <Checkbox label="Orchestra Room" />
      <Checkbox label="Counseling Office" />
      <Checkbox label="SRC" />
      <Checkbox label="Band Room" />
      <Checkbox label="Chorus Room" />
      <Footer></Footer>
    </>
  );
}

export default MainFloor;
