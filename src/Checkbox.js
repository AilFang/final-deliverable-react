import "./Map.css";
import React, { useState } from "react";

// pull in rooms & setRooms from MainFloor props
// sami -> aileen
// find the key of the id in rooms
// set the value of the id's isChecked to the opposed value
// let updatedRooms = logic
// setRooms(updatedRooms);

function Checkbox({ label, setRooms, rooms, id }) {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = (clickedId) => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    // console.log("----------");
    // console.log("New value:", newValue);
    // console.log("id:", id);
    // console.log("Clicked ID:", clickedId);
    const room = rooms.find((x) => x.id === clickedId);
    // console.log("room:", room);
    room.isChecked = newValue;
    console.log("Rooms:", rooms);
    setRooms(rooms);
  };

  return (
    <label className="container">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => checkHandler(id)}
      />
      <span className="checkmark"></span>
      {label}
    </label>
  );
}

export default Checkbox;
