import { useState, useEffect, useRef } from "react";
import WildWestMap from "./WildWestMap";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Checkbox from "./Checkbox";
import Back from "./Back";

function WildWest() {
  const [rooms, setRooms] = useState([]);
  const checkboxContainerRef = useRef(null);

  useEffect(() => {
    setRooms([
      {
        id: "r12",
        label: "3.112",
        isChecked: false,
      },
      {
        id: "r11",
        label: "3.111",
        isChecked: false,
      },
      {
        id: "r02",
        label: "3.102",
        isChecked: false,
      },
      {
        id: "r09",
        label: "3.109",
        isChecked: false,
      },
      {
        id: "r03",
        label: "3.103",
        isChecked: false,
      },
      {
        id: "r04",
        label: "3.104",
        isChecked: false,
      },
      {
        id: "r07",
        label: "3.107",
        isChecked: false,
      },
      {
        id: "r08",
        label: "3.108",
        isChecked: false,
      },
      {
        id: "r06",
        label: "3.106",
        isChecked: false,
      },
      {
        id: "r21",
        label: "3.121",
        isChecked: false,
      },
      {
        id: "r22",
        label: "3.122",
        isChecked: false,
      },
      {
        id: "r26",
        label: "3.126",
        isChecked: false,
      },
      {
        id: "r23",
        label: "3.123",
        isChecked: false,
      },
      {
        id: "r24",
        label: "3.124",
        isChecked: false,
      },
      {
        id: "r27",
        label: "3.127",
        isChecked: false,
      },
      {
        id: "r28",
        label: "3.128",
        isChecked: false,
      },
      {
        id: "r29",
        label: "3.129",
        isChecked: false,
      },
      {
        id: "r31",
        label: "3.131",
        isChecked: false,
      },
      {
        id: "r32",
        label: "3.132",
        isChecked: false,
      },
      {
        id: "r35",
        label: "3.135",
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
        <WildWestMap rooms={rooms}></WildWestMap>
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

export default WildWest;
