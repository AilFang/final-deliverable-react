import { useState, useEffect, useRef } from "react";
import SecondFloorMap from "./SecondFloorMap";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Checkbox from "./Checkbox";
import Back from "./Back";

function Secondfloor() {
  const [rooms, setRooms] = useState([]);
  const [checkboxContainerHeight, setCheckboxContainerHeight] = useState(0);
  const checkboxContainerRef = useRef(null);

  useEffect(() => {
    setRooms([
      {
        id: "r62",
        label: "5.262",
        isChecked: false,
      },
      {
        id: "r59",
        label: "5.259",
        isChecked: false,
      },
      {
        id: "r58",
        label: "5.258",
        isChecked: false,
      },
      {
        id: "r57",
        label: "5.257",
        isChecked: false,
      },
      {
        id: "r56",
        label: "5.256",
        isChecked: false,
      },
      {
        id: "r54",
        label: "5.254",
        isChecked: false,
      },
      {
        id: "r48",
        label: "5.248",
        isChecked: false,
      },
      {
        id: "r49",
        label: "5.249",
        isChecked: false,
      },
      {
        id: "r79",
        label: "5.279",
        isChecked: false,
      },
      {
        id: "r41",
        label: "5.241",
        isChecked: false,
      },
      {
        id: "r01",
        label: "5.201",
        isChecked: false,
      },
      {
        id: "r19",
        label: "5.219",
        isChecked: false,
      },
      {
        id: "r21",
        label: "5.221",
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
        <SecondFloorMap rooms={rooms}></SecondFloorMap>
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

export default Secondfloor;
