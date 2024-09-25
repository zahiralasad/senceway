import React from "react";
import { useState, useEffect } from 'react';
import mqtt from "mqtt";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';
import Switch from './componets/switch/Switch';
import "./style.css";

function Home() {
    // const [client, setClient] = useState(null);
    const [isConnected, setIsConnected] = useState(true);
    const [receivedMessage, setReceivedMessage] = useState("");
    const [msg, setMsg] = useState("");
    const topic = 'arduino/led';



    const handleSwitchData = (data) => {
        // console.log(data)
        setMsg(data);
        // console.log(msg);
        // console.log(data)
        if (data == true) {
            console.log('LED button ON')

        }

    }

    useEffect(() => {
        let client = mqtt.connect("ws://localhost:8083",{
            reconnectPeriod: 5000, // Reconnect every 5 seconds
            connectTimeout: 4000,  // Time out after 4 seconds if can't connect
        });
        // let client = mqtt.connect("mqtt://192.168.0.32:1883");

        // When the client successfully connects
        client.on('connect', () => {
            console.log('Connected');
            setIsConnected(true);

            // Subscribe to a topic once connected
            client.subscribe(topic, (err) => {
                if (err) {
                    console.error('Failed to subscribe:', err);
                } else {
                    console.log(`Subscribed to ${topic}`);
                }
            },3000);
        });

        // When a message is received on the subscribed topic
        client.on('message', (topic, message) => {
            console.log(`Received message: ${message.toString()} from topic: ${topic}`);
            setReceivedMessage(message.toString()); // Set the received message in state
        });


        // When the connection is lost (either offline or close events)
        client.on('offline', () => {
            console.log('Connection lost');
            setIsConnected(false);
        });
        client.on('close', () => {
            console.log('Connection closed');
            setIsConnected(false); // Set connected to false
        });
        client.on('error', (err) => {
            console.error('Connection error: ', err);
        });

        // Clean up the client on component unmount
        return () => {
            client.end();
        };
    }, []); // Empty dependency array so the effect runs only once on mount

    return (
        <div className="container body-area">
            <div className="pt-3 row">
                <div className="grid-container text-center menu-items-area">
                    <div className="grid-item">
                        <div className="py-1 border-bottom border-dark mb-3">Arduino Led</div>
                        <span className="pe-2 ">Off</span><Switch dataSwitchToHome={handleSwitchData} /><span className="ps-2">On</span>
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