import { useState, useEffect } from "react";
import MainMap from "./MainMap";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Checkbox from "./Checkbox";

function MainFloor() {
  const [rooms, setRooms] = useState([]);

  console.log("Room:", rooms);

  useEffect(() => {
    setRooms([
      {
        id: "1",
        label: "Main Office",
        isChecked: false,
      },
      {
        id: "2",
        label: "Orchestra Room",
        isChecked: false,
      },
      {
        id: "3",
        label: "Band Room",
        isChecked: false,
      },
      {
        id: "4",
        label: "Counseling",
        isChecked: false,
      },
    ]);
  }, []);
  const handleCheckboxChange = (id, isChecked) => {
    const updatedRooms = rooms.map((room) =>
      room.id === id ? { ...room, isChecked } : room
    );
    setRooms(updatedRooms);
  };

  return (
    <>
      <Navigation></Navigation>
      <div className="whole-container">
        <MainMap rooms={rooms}></MainMap>
      </div>

      {rooms.map((room) => {
        console.log("Update room", rooms);
        console.log("isChecked", room.isChecked);
        return (
          <Checkbox
            key={room.id}
            label={room.label}
            checked={room.isChecked}
            rooms={rooms}
            setRooms={setRooms}
            id={room.id}
            onChange={(isChecked) => handleCheckboxChange(room.id, isChecked)}

            // onChange={(newValue) => handleCheckboxChange(room.label, newValue)}
          />
        );
      })}
      {/* <Checkbox label="MLLH" /> */}

      {/* <Checkbox label="Main Office" /> */}
      {/* <Checkbox label="Orchestra Room" /> */}
      {/* <Checkbox label="Counseling Office" />
      <Checkbox label="SRC" /> */}
      {/* <Checkbox label="Band Room" /> */}
      {/* <Checkbox label="Chorus Room" /> */}
      <Footer></Footer>
    </>
  );
}

export default MainFloor;
