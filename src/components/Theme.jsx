import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

function NavTheme(){
    return (
    <div className="nav-dark">
      <FontAwesomeIcon icon={faSun} />
    </div>);
  };
  
function BodyTheme(){
    return (
    <div className="body-dark">
      <FontAwesomeIcon icon={faSun} />
    </div>);
  };

export {NavTheme,BodyTheme};
  