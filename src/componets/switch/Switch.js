import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './switch.css';
function Switch() {
  const [toggled, setToggled] = useState(false);
  return (
      <button
        className={`toggle-btn ${toggled ? "toggled" : ""}`}
        onClick={() => setToggled(!toggled)}
      >
        <div className='thumb'></div>
      </button>
  );
}

export default Switch;