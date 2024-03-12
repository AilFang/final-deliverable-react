import "./Map.css";
import React, { useState } from "react";


// pull in rooms & setRooms from MainFloor props
function Checkbox({ label, value, onChange }) {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);

    // sami -> aileen
    // find the key of the id in rooms
    // set the value of the id's isChecked to the opposed value
    // let updatedRooms = logic
    // setRooms(updatedRooms);
  };

  

  if (isChecked) {
    return (
      <label className="test">
        <input type="checkbox" checked={value} onChange={checkHandler} />
        <span className="checkmark"></span>
        {label}
      </label>
    );
  } else {
    return (
      <label className="container">
        <input type="checkbox" checked={value} onChange={checkHandler} />
        <span className="checkmark"></span>
        {label}
      </label>
    );
  }
  //   return (
  //     <label className="container">
  //       <input type="checkbox" checked={value} onChange={checkHandler} />
  //       <span className="checkmark"></span>
  //       {label}
  //     </label>
  //   );
}

export default Checkbox;
