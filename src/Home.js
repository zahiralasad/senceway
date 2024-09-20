import React from "react";
import mqtt from "mqtt";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";

function Home() {
    let client = mqtt.connect("mqtt://localhost");
    return (
        <div className="container body-area">
            <div className="pt-3 row">
                <div className="grid-container text-center menu-items-area">
                    <div className="grid-item">
                        <div className="border-bottom border-dark">Arduino Led</div>
                        <div class="custom-control custom-switch">
<input type="checkbox" class="custom-control-input"/>
<label class="custom-control-label" for="customSwitches">Any statement</label>
</div>

                    </div>
                    <Link className="btn btn-warning grid-item" type="button" to='/'>Sensor 2</Link>
                    <Link className="btn btn-warning grid-item" type="button" to='/'>Sensor 3</Link>
                    <Link className="btn btn-warning grid-item" type="button" to='/'>Sensor 4</Link>
                </div>
            </div>
        </div>


    )
}
export default Home;