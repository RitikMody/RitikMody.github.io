import React from "react";
import About from "./About";
import { MobColor } from "./Color";
import Experience from "./Experience";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Skills from "./Skills";
import { BodyTheme } from "./Theme";

function Body()
{
    return (<div className="content">
                <div className="hide">
                <MobColor/>
                <BodyTheme/></div>
                <div className="inner-content">
                    <Introduction/>
                </div>
                <div className="hide">
                    <Skills/>
                    <Projects/>
                    <Experience/>
                    <About/>
                </div>
            </div>);
}

export default Body;
