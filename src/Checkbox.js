import "./Map.css";
import React, { useState } from "react";

function Checkbox({ label, value, onChange }) {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };
  if (isChecked) {
    return (
      <label className="container">
        <input type="checkbox" checked={value} onChange={checkHandler} />
        <span className="checkmark"></span>
        {label}
      </label>
    );
  } else {
    return (
      <label className="test">
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
