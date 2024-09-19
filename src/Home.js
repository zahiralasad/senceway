import React from "react";
import mqtt from "mqtt";
// import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";

function Home() {
    let client = mqtt.connect("mqtt://localhost");
    const arduinoController = () => {

    }
    return (
        <div className="container body-area">
            {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"> */}
            <div className="pt-2 row">
                <div className="grid-container text-center menu-items-area">
                    <div className="grid-item" onClick={arduinoController}>Arduino Led</div>
                    <div className="grid-item">Col</div>
                    <div className="grid-item">Col</div>
                    <div className="grid-item">Col</div>
                </div>
            </div>
        </div>


    )
}
export default Home;