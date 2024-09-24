import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './switch.css';
function Switch({dataSwitchToHome}) {
  const [toggled, setToggled] = useState(false);
  console.log(toggled)

  const handleToggle = () => {
    // console.log(toggled);
    setToggled(!toggled);
    dataSwitchToHome(toggled);
  }

  return (
      <button
        className={`toggle-btn ${toggled ? "toggled" : ""}`}
        // onClick={() => setToggled(!toggled)}
        onClick = {handleToggle}
      >
        <div className='thumb'></div>
      </button>
  );
}

export default Switch;