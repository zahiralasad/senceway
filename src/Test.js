import { useState } from 'react';
import './test.css';

function Test() {
  const [toggled, setToggled] = useState(false);
  return (
    <div>
      <button
        className={`toggle-btn ${toggled ? "toggled" : ""}`}
        onClick={() => setToggled(!toggled)}
      >
        <div className='thumb'></div>
      </button>
    </div>
  );
}

export default Test;