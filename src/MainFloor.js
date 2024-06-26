import { useState, useEffect, useRef } from "react";
import MainMap from "./MainMap";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Checkbox from "./Checkbox";
import Back from "./Back";

function MainFloor() {
  const [rooms, setRooms] = useState([]);
  const checkboxContainerRef = useRef(null);

  useEffect(() => {
    setRooms([
      {
        id: "MainOffice",
        label: "Main Office",
        isChecked: false,
      },
      {
        id: "OrchestraRoom",
        label: "Orchestra Room",
        isChecked: false,
      },
      {
        id: "BandRoom",
        label: "Band Room",
        isChecked: false,
      },
      {
        id: "ChorusRoom",
        label: "Chorus Room",
        isChecked: false,
      },
      {
        id: "r11",
        label: "5.111",
        isChecked: false,
      },
      {
        id: "Counseling",
        label: "Counseling",
        isChecked: false,
      },
      {
        id: "SRC",
        label: "SRC",
        isChecked: false,
      },
      {
        id: "MLLH",
        label: "MLLH",
        isChecked: false,
      },
    ]);
  }, []);

  useEffect(() => {}, [rooms]);
  const handleCheckboxChange = (id, isChecked) => {
    const updatedRooms = rooms.map((room) =>
      room.id === id ? { ...room, isChecked } : room
    );
    setRooms(updatedRooms);
  };

  return (
    <>
      <Navigation></Navigation>
      <Back></Back>
      <div className="individual-container">
        <MainMap rooms={rooms}></MainMap>
      </div>
      <div ref={checkboxContainerRef} className="checkbox-container">
        {rooms.map((room) => {
          return (
            <Checkbox
              key={room.id}
              label={room.label}
              checked={room.isChecked}
              rooms={rooms}
              setRooms={setRooms}
              id={room.id}
              onChange={(isChecked) => handleCheckboxChange(room.id, isChecked)}
            />
          );
        })}
      </div>
      <Footer></Footer>
    </>
  );
}

export default MainFloor;
