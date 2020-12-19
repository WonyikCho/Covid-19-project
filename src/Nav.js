import React from "react";
import "./App.css";
import {Link} from "react-router-dom";


function Nav() {
    return (
        <nav>
           <Link to="/" style={{color: "white", textDecoration:"none"}}><div>Home</div></Link>
           <ul className="nav-links">
               <Link to="/Map" style={{color: "white", textDecoration:"none", marginTop: "10px",
            marginRight: "40px"}}><li>Map</li></Link>
               <Link to="/Graph" style={{color: "white", textDecoration:"none", marginTop: "10px",
            marginRight: "40px"}}><li>Graph</li></Link>
               <Link to="/Source" style={{color: "white", textDecoration:"none", marginTop: "10px",
            marginRight: "40px"}}><li>Source</li></Link>
           </ul>
        </nav>
    );
}

export default Nav;