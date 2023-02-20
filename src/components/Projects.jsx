import React from "react";
import projects from "../projects";
import {Grid} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

  
function Project(props){
    let link
    if (props.link!=null)
    {
        link=<a href={props.link} target="_blank" rel="noreferrer"><span className="goto link"><FontAwesomeIcon icon={faExternalLinkAlt} /></span></a>;
    }
    else{
        link=<span></span>;
    }

    return( <Grid item xs={12} md={6} lg={4} className={props.title}>
                <Card className={props.title}>
                <CardContent>
                <h1>{props.title}</h1>
                <div className="project">
                    <p>{props.description}</p>
                </div>
                <span>
                    <a href={props.github} target="_blank" rel="noreferrer"><i className="link devicon-github-original"></i></a>
                    { link }
                </span><br/>
                {props.software.map((item,index)=>{
                    return <Chip 
                    key={index}
                    variant="outlined"
                    color="primary"
                    label={item}/>;
                })}
                </CardContent>
                </Card>
            </Grid>
            );

}

function Projects(){
    return <div className="projects">
        <Grid container spacing={1}>
        <h1 className="heading hide">Projects</h1>
            <Grid container item xs={12} spacing={3}>
                {projects.map((item,index)=>{
                    return <Project key={index} title={item.title} description={item.description} software={item.software} link={item.link} github={item.github}/>
                })}
            </Grid>
        </Grid>
        </div>;
}

export default Projects;