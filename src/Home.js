import React from "react";
import mqtt from "mqtt";
// import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";

function Home() {
    let client = mqtt.connect("mqtt://localhost");
    return (
        <div className="container">
            {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"> */}
            <div className="pt-5 row g-3 bg-dark">
                <div>Home</div>
            </div>
        </div>
        

    )
}
export default Home;