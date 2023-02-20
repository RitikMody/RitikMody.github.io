import React from "react";
import experience from "../experience"

function Work(props){
    return( <li>
                <div class="timeline-content">
                    <h3 class="date">{props.date}</h3>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                    <em>{props.employer}</em>
                </div>
            </li>);   
}

function Experience(){
    return <div className="experience">
    <h1 className="heading hide">Experience</h1>
    <div class="container">
    <div class="timeline">
        <ul>
        {experience.map((item,index)=>{
            return <Work key={index} title={item.title} date={item.date} description={item.description} employer={item.employer}/>
        })}
        </ul>
    </div>
    </div>
    </div>;
}

export default Experience;
