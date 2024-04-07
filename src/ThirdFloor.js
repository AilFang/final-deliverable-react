import { useState, useEffect, useRef } from "react";
import ThirdFloorMap from "./ThirdFloorMap";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Checkbox from "./Checkbox";
import Back from "./Back";

function ThirdFloor() {
  const [rooms, setRooms] = useState([]);
  const [checkboxContainerHeight, setCheckboxContainerHeight] = useState(0);
  const checkboxContainerRef = useRef(null);

  useEffect(() => {
    setRooms([
      {
        id: "r47",
        label: "5.347",
        isChecked: false,
      },
      {
        id: "r48",
        label: "5.348",
        isChecked: false,
      },
      {
        id: "r49",
        label: "5.349",
        isChecked: false,
      },
      {
        id: "r61",
        label: "5.361",
        isChecked: false,
      },
      {
        id: "r66",
        label: "5.366",
        isChecked: false,
      },
      {
        id: "r02",
        label: "5.302",
        isChecked: false,
      },
      {
        id: "r03",
        label: "5.303",
        isChecked: false,
      },
      {
        id: "r46",
        label: "5.346",
        isChecked: false,
      },
      {
        id: "r43",
        label: "5.343",
        isChecked: false,
      },
      {
        id: "r41",
        label: "5.341",
        isChecked: false,
      },
      {
        id: "r67",
        label: "5.367",
        isChecked: false,
      },
      {
        id: "r38",
        label: "5.338",
        isChecked: false,
      },
      {
        id: "r36",
        label: "5.336",
        isChecked: false,
      },
      {
        id: "r21",
        label: "5.321",
        isChecked: false,
      },
      {
        id: "r26",
        label: "5.326",
        isChecked: false,
      },
      {
        id: "r27",
        label: "5.327",
        isChecked: false,
      },
      {
        id: "r37",
        label: "5.337",
        isChecked: false,
      },
      {
        id: "r39",
        label: "5.339",
        isChecked: false,
      },
      {
        id: "r42",
        label: "5.342",
        isChecked: false,
      },
      {
        id: "r44",
        label: "5.344",
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
        <ThirdFloorMap rooms={rooms}></ThirdFloorMap>
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

export default ThirdFloor;
