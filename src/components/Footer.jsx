import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

function Footer(){
    return <footer>
        <a target="_blank" href="https://github.com/RitikMody/RitikMody.github.io" ><span className="left">
        <FontAwesomeIcon icon={faCodeBranch}/> main
        </span></a>
        <span className="copy">© {new Date().getFullYear()} Ritik Mody</span>
        <span className="right">
            <a target="_blank" alt="GitHub" href="https://github.com/RitikMody"><i className="devicon-github-original"></i></a>
        </span>    
        <span className="right">
            <a target="_blank" alt="LinkedIn" href="https://www.linkedin.com/in/ritik-mody-a40792188/"><i className="devicon-linkedin-plain"></i></a>
        </span>
    </footer>;
}

export default Footer;