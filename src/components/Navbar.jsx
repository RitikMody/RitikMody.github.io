import React from "react";
import { NavColor } from "./Color";
import { NavTheme } from "./Theme";
import { ReactSVG } from "react-svg";


function Navbar(){
  return (<nav className="nav">
  <div className="navbar">
    <div className="navbar_title">
    <ReactSVG src={process.env.PUBLIC_URL+"/logo.svg"} />
    </div><br/>
    <div className="navbar_items">
      <a className="item item-skills" href="#"> <i className="devicon-javascript-plain colored"></i> Skills.js</a><br/><br/>
      <a className="item item-projects" href="#"> <i className="devicon-html5-plain colored"></i> Projects.html</a><br/><br/>
      <a className="item item-experience" href="#"> <i className="devicon-react-plain colored"></i> Experience.jsx</a><br/><br/>
      <a className="item item-about" href="#"> <i className="devicon-css3-plain colored"></i> About.css</a><br/>
    </div>
  </div>
  <NavColor/>
  <NavTheme/>
  </nav>);
};

export default Navbar;
