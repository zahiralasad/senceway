import React from "react";
import { useState, useEffect } from 'react';
// import mqtt from "mqtt";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';
import Switch from './componets/switch/Switch';
import "./style.css";

function Home() {
    const [toggled, setToggled] = useState(false);
    
    // let client = mqtt.connect("mqtt://localhost");
    
    return (
        <div className="container body-area">
            <div className="pt-3 row">
                <div className="grid-container text-center menu-items-area">
                    <div className="grid-item">
                        <div className="py-1 border-bottom border-dark mb-2">Arduino Led</div>
                            <Switch/>
                    </div>
                    <div className="grid-item">
                        <div className="py-1 border-bottom border-dark mb-2">Sensor 2</div>
                            
                    </div>
                    <div className="grid-item">
                        <div className="py-1 border-bottom border-dark mb-2">Sensor 3</div>
                            
                    </div>
                    <div className="grid-item">
                        <div className="py-1 border-bottom border-dark mb-2">Sensor 4</div>
                            
                    </div>
                    
                </div>
            </div>
        </div>


    )
}
export default Home;