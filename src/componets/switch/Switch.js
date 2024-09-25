import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './switch.css';
function Switch({dataSwitchToHome}) {
  const [toggled, setToggled] = useState(false);
  // console.log(toggled)

  const handleToggle = () => {
    // console.log("before",toggled);
    setToggled(!toggled);
    

    //
  }
  useEffect(()=>{
    // console.log("after",toggled);
    dataSwitchToHome(toggled);
  },[toggled]
)
  

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