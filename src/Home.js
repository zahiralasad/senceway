import React from "react";
import { useState, useEffect } from 'react';
import mqtt from "mqtt";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';
import Switch from './componets/switch/Switch';
import "./style.css";

function Home() {
    // const [toggled, setToggled] = useState(false);
    const [msg, setMsg] = useState("");

    let client = mqtt.connect("ws://192.168.0.32:8083");
    // let client = mqtt.connect("mqtt://192.168.0.32:1883");

    const handleSwitchData = (data) => {
        console.log(msg);
        // if (data)

    }

    useEffect(() => {
        if (client) {
            client.on('connect', () => {
                console.log('Connected');
            });
            client.on('error', (err) => {
                console.error('Connection error: ', err);
                client.end();
            });
        }
    })
    return (
        <div className="container body-area">
            <div className="pt-3 row">
                <div className="grid-container text-center menu-items-area">
                    <div className="grid-item">
                        <div className="py-1 border-bottom border-dark mb-3">Arduino Led</div>
                        <span className="pe-2 ">Off</span><Switch dataSwitchToHome={handleSwitchData}/><span className="ps-2">On</span>
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
                <div>{msg}</div>
            </div>
        </div>


    )
}
export default Home;