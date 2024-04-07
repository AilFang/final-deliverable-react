import { useState, useEffect, useRef } from "react";
import GroundFloorMap from "./GroundFloorMap";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Checkbox from "./Checkbox";
import Back from "./Back";

function GroundFloor() {
  const [rooms, setRooms] = useState([]);
  const [checkboxContainerHeight, setCheckboxContainerHeight] = useState(0);
  const checkboxContainerRef = useRef(null);

  useEffect(() => {
    setRooms([
      {
        id: "r42",
        label: "5.042",
        isChecked: false,
      },
      {
        id: "r44",
        label: "5.044",
        isChecked: false,
      },
      {
        id: "r48",
        label: "5.048",
        isChecked: false,
      },
      {
        id: "r55",
        label: "5.055",
        isChecked: false,
      },
      {
        id: "r54",
        label: "5.054",
        isChecked: false,
      },
      {
        id: "r53",
        label: "5.053",
        isChecked: false,
      },
      {
        id: "r5657",
        label: "5.056/5.057",
        isChecked: false,
      },
      {
        id: "r63",
        label: "5.063",
        isChecked: false,
      },
      {
        id: "r64",
        label: "5.064",
        isChecked: false,
      },
      {
        id: "LLLH",
        label: "LLLH",
        isChecked: false,
      },
    ]);
  }, []);

  useEffect(() => {
    if (checkboxContainerRef.current) {
      const height = checkboxContainerRef.current.offsetHeight;
      setCheckboxContainerHeight(height);
    }
  }, [rooms]);
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
        <GroundFloorMap rooms={rooms}></GroundFloorMap>
      </div>
      <div
        ref={checkboxContainerRef}
        style={{ "--checkbox-height": `${checkboxContainerHeight}px` }}
        className="checkbox-container"
      >
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

export default GroundFloor;
