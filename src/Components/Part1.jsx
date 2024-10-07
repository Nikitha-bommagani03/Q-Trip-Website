import React from "react";
import { Link } from "react-router-dom";
export default class Part1 extends React.Component{
    render(){
        return(
            <>
            <nav>
                <ul>
                    <li>Qtrip</li>
                    <div id="ul1">
                        <ul>
                            <li><Link to="/"><button id="bb1">Home</button></Link></li>
                            <li><button id="bb2">Reservations</button></li>
                            <li><Link to="/login"><button id="b1" >Login Here</button></Link></li>
                            <li><Link to="/register"><button id="b2">Register</button></Link></li>
                        </ul>
                    </div>
                </ul>
            </nav>
            </>
        )
    }
}