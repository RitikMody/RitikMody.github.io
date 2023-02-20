import React from "react";
import {Grid} from "@material-ui/core";

function Skills(){
  return <div className="skills">
    <h1 className="heading hide">Skills</h1>
    <div className="skills-items">
    <h1>Languages</h1>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={6} md={3} lg={2}>
            <i className="skill devicon-python-plain"></i><br/>
            python
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <i className="skill devicon-java-plain"></i><br/>
            java
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <i className="skill devicon-javascript-plain"></i><br/>
            javascript
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <i className="skill devicon-php-plain"></i><br/>
            php
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <i className="skill devicon-html5-plain"></i><br/>
            html
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <i className="skill devicon-css3-plain"></i><br/>
            css
          </Grid>
        </Grid>
      </Grid>
    </div>
    <div className="skills-items">
      <h1>Web Stack</h1>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={6} md={3} lg={2}>
            <i className="skill devicon-nodejs-plain"></i><br/>
            nodejs
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <i className="skill devicon-react-plain"></i><br/>
            react
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <i className="skill devicon-express-original"></i><br/>
            express
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <i className="skill devicon-django-plain"></i><br/>
            django
          </Grid>
        </Grid>
      </Grid>
    </div>
    <div className="skills-items">
      <h1>Database</h1>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={6} md={3} lg={2}>
            <i className="skill devicon-mysql-plain"></i><br/>
            mysql
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <i className="skill devicon-postgresql-plain"></i><br/>
            postgresql
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <i className="skill devicon-mongodb-plain"></i><br/>
            mongodb
          </Grid>
        </Grid>
      </Grid>
    </div>
    <div className="skills-items">
      <h1>Editors</h1>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={6} md={3} lg={2}>
            <i className="skill devicon-atom-plain"></i><br/>
            atom
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <i className="skill devicon-visualstudio-plain"></i><br/>
            visual studio
          </Grid>
        </Grid>
      </Grid>
    </div>
    <div className="skills-items">
      <h1>Others</h1>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={6} md={3} lg={2}>
            <i className="skill devicon-heroku-plain"></i><br/>
            heroku
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <i className="skill devicon-github-plain"></i><br/>
            github
          </Grid>
        </Grid>
      </Grid>
    </div>
    
  </div>
};

export default Skills;
