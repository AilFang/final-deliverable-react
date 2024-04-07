import { useState, useEffect, useRef } from "react";
import WestWingMap from "./WestWingMap";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Checkbox from "./Checkbox";
import Back from "./Back";

function WestWing() {
  const [rooms, setRooms] = useState([]);
  const checkboxContainerRef = useRef(null);

  useEffect(() => {
    setRooms([
      {
        id: "photo",
        label: "2.141/Photo",
        isChecked: false,
      },
      {
        id: "art",
        label: "2.126/Art",
        isChecked: false,
      },
      {
        id: "breakRoom",
        label: "Copy Room",
        isChecked: false,
      },
      {
        id: "r02",
        label: "2.102",
        isChecked: false,
      },
      {
        id: "r03",
        label: "2.103",
        isChecked: false,
      },
      {
        id: "r04",
        label: "2.104",
        isChecked: false,
      },
      {
        id: "r07",
        label: "2.107",
        isChecked: false,
      },
      {
        id: "r08",
        label: "2.108",
        isChecked: false,
      },
      {
        id: "r22",
        label: "2.122",
        isChecked: false,
      },
      {
        id: "r13",
        label: "2.113",
        isChecked: false,
      },
      {
        id: "r12",
        label: "2.112",
        isChecked: false,
      },
      {
        id: "r09",
        label: "2.109",
        isChecked: false,
      },
      {
        id: "r21",
        label: "2.121",
        isChecked: false,
      },
      {
        id: "r59",
        label: "2.159",
        isChecked: false,
      },
      {
        id: "r52",
        label: "2.152",
        isChecked: false,
      },
      {
        id: "r51",
        label: "2.151",
        isChecked: false,
      },
      {
        id: "r81",
        label: "2.181",
        isChecked: false,
      },
      {
        id: "r62",
        label: "2.162",
        isChecked: false,
      },
      {
        id: "r63",
        label: "2.163",
        isChecked: false,
      },
      {
        id: "r64",
        label: "2.164",
        isChecked: false,
      },
      {
        id: "r73",
        label: "2.173",
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
        <WestWingMap rooms={rooms}></WestWingMap>
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

export default WestWing;
