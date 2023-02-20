import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Skills from "./components/Skills";
import Introduction from './components/Introduction';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon,faSun } from '@fortawesome/free-solid-svg-icons';

import $ from 'jquery';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

let items = [];

let close = ()=>{
  $('.tab-'+items[items.length-1]).remove();
  items.pop();
  if(items.length>=1)
  {
    let latest = items[items.length-1];
    $('.tab-'+latest).addClass('active-tab');
    $('.tab-'+latest).append('<button class="cross cross-'+latest+'" onclick ="close()">x</button>');
    if(latest==="skills")
    {
      ReactDOM.render(
        <Skills />,
        document.querySelector('.inner-content')
      );
      document.querySelector('.content').scrollTo(0,0)
    }
    else if(latest==="about")
    {
      ReactDOM.render(
        <About />,
        document.querySelector('.inner-content')
      );
      document.querySelector('.content').scrollTo(0,0)
    }
    else if(latest==="projects")
    {
      ReactDOM.render(
        <Projects />,
        document.querySelector('.inner-content')
      );
      document.querySelector('.content').scrollTo(0,0)
    }
    else
    {
      ReactDOM.render(
        <Experience />,
        document.querySelector('.inner-content')
      );
      document.querySelector('.content').scrollTo(0,0)
    }
  }
  else{
    ReactDOM.render(
      <Introduction />,
      document.querySelector('.inner-content')
    );
    document.querySelector('.content').scrollTo(0,0)
  }
console.log(items);
}
$('html').on('click','.cross',close);

let click = () =>{
  $('.tab-skills').removeClass('active-tab');
  $('.tab-skills > button').remove();
  $('.tab-projects').removeClass('active-tab');
  $('.tab-projects > button').remove();
  $('.tab-experience').removeClass('active-tab');
  $('.tab-experience > button').remove();
  $('.tab-about').removeClass('active-tab');
  $('.tab-about > button').remove();
};

$('.a').on('click',click);

$('html').on('click','.b-skills',() =>{
  click();
  items = items.filter(function(ele){ 
    return ele !== 'skills'; 
  });
  items.push('skills');
  $('.tab-skills').addClass('active-tab');
  ReactDOM.render(
    <Skills />,
    document.querySelector('.inner-content')
    );
    document.querySelector('.content').scrollTo(0,0)
  $('.tab-skills').append('<button class="cross cross-skills" onclick ="close()">x</button>');
});

$('html').on('click','.b-experience',() =>{
  click();
  items = items.filter(function(ele){ 
    return ele !== 'experience'; 
  });
  items.push('experience');
  $('.tab-experience').addClass('active-tab');
  ReactDOM.render(
    <Experience />,
    document.querySelector('.inner-content')
  );
  document.querySelector('.content').scrollTo(0,0)
  $('.tab-experience').append('<button class="cross cross-experience" onclick ="close()">x</button>');
});

$('html').on('click','.b-projects',() =>{
  click();
  items = items.filter(function(ele){ 
    return ele !== 'projects'; 
  });
  items.push('projects');
  $('.tab-projects').addClass('active-tab');
  ReactDOM.render(
    <Projects />,
    document.querySelector('.inner-content')
  );
  document.querySelector('.content').scrollTo(0,0)
  $('.tab-projects').append('<button class="cross cross-projects" onclick ="close()">x</button>');
});

$('html').on('click','.b-about',() =>{
  click();
  items = items.filter(function(ele){ 
    return ele !== 'about'; 
  });
  items.push('about');
  $('.tab-about').addClass('active-tab');
  ReactDOM.render(
    <About />,
    document.querySelector('.inner-content')
  );
  document.querySelector('.content').scrollTo(0,0)
  $('.tab-about').append('<button class="cross cross-about" onclick ="close()">x</button>');
});

$('.item-skills').on('click',()=>{
  if($('.tab-skills').length===0){
    click();
    $('.topnav').append('<span class="tab tab-skills active-tab"><span class="a b-skills"><a href="#"> <i class="devicon-javascript-plain colored"></i> Skills.js</a></span><button class="cross cross-skills" onclick ="close()">x</button></span>');
    items.push('skills');
    ReactDOM.render(
      <Skills />,
      document.querySelector('.inner-content')
    );
    document.querySelector('.content').scrollTo(0,0)
  }
  else{
    click();
    items = items.filter(function(ele){ 
      return ele !== 'skills'; 
    });
    items.push('skills');
    $('.tab-skills').addClass('active-tab');
    ReactDOM.render(
            <Skills />,
            document.querySelector('.inner-content')
          );
          document.querySelector('.content').scrollTo(0,0)
    $('.tab-skills').append('<button class="cross cross-skills" onclick ="close()">x</button>');
  }
});

$('.item-experience').on('click',()=>{
  if($('.tab-experience').length===0){
    click();
    $('.topnav').append('<span class="tab tab-experience active-tab"><span class="a b-experience" class="a experience"><a href="#"> <i class="devicon-react-plain colored"></i> Experience.jsx</a></span><button class="cross cross-experience" onclick ="close()">x</button></span>');
    items.push('experience');
    document.querySelector('.content').scrollTo(0,0)
    ReactDOM.render(
      <Experience />,
      document.querySelector('.inner-content')
    );

  }
  else{
    click();
    items = items.filter(function(ele){ 
      return ele !== 'experience'; 
    });
    items.push('experience');
    $('.tab-experience').addClass('active-tab');
    document.querySelector('.content').scrollTo(0,0)
    ReactDOM.render(
      <Experience />,
      document.querySelector('.inner-content')
    );

    $('.tab-experience').append('<button class="cross cross-experience" onclick ="close()">x</button>');

  }
});

$('.item-projects').on('click',()=>{
  if($('.tab-projects').length===0){
    click();
    $('.topnav').append('<span class="tab tab-projects active-tab"><span class="a b-projects" class="a projects"><a href="#"> <i class="devicon-html5-plain colored"></i> Projects.html</a></span><button class="cross cross-projects" onclick ="close()">x</button></span>');
    items.push('projects');
    ReactDOM.render(
      <Projects />,
      document.querySelector('.inner-content')
    );
    document.querySelector('.content').scrollTo(0,0)

  }
  else{
    click();
    items = items.filter(function(ele){ 
      return ele !== 'projects'; 
    });
    items.push('projects');
    $('.tab-projects').addClass('active-tab');
    ReactDOM.render(
      <Projects />,
      document.querySelector('.inner-content')
    );
    document.querySelector('.content').scrollTo(0,0)

    $('.tab-projects').append('<button class="cross cross-projects" onclick ="close()">x</button>');
  }
});

$('.item-about').on('click',()=>{
  if($('.tab-about').length===0){
    click();
    $('.topnav').append('<span class="tab tab-about active-tab"><span class="a b-about" class="a about"><a href="#"> <i class="devicon-css3-plain colored"></i> About.css</a></span><button class="cross cross-about" onclick ="close()">x</button></span>');
    items.push('about');
    ReactDOM.render(
      <About />,
      document.querySelector('.inner-content')
    );
    document.querySelector('.content').scrollTo(0,0)

  }
  else{
    click();
    items = items.filter(function(ele){ 
      return ele !== 'about'; 
    });
    items.push('about');
    $('.tab-about').addClass('active-tab');
    ReactDOM.render(
      <About />,
      document.querySelector('.inner-content')
    );
    document.querySelector('.content').scrollTo(0,0)
    $('.tab-about').append('<button class="cross cross-about" onclick ="close()">x</button>');
  }
});

function lightTheme(){
  localStorage.setItem("theme", "light");
    document.documentElement.setAttribute('theme', 'light');
    ReactDOM.render(
      <FontAwesomeIcon icon={faMoon} />,
      document.querySelector('.nav-dark')
    );
    ReactDOM.render(
      <FontAwesomeIcon icon={faMoon} />,
    document.querySelector('.body-dark')
  );
}
function darkTheme(){
  localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute('theme', 'dark');
    ReactDOM.render(
        <FontAwesomeIcon icon={faSun} />,
      document.querySelector('.nav-dark')
    );
    ReactDOM.render(
      <FontAwesomeIcon icon={faSun} />,
    document.querySelector('.body-dark')
  );
}

function toggle(){
  if(localStorage.getItem("theme")==="dark")
  {
    lightTheme();
    
  }
  else
  {
    darkTheme();
  }
}
$('.nav-dark').on("click",toggle);
$('.body-dark').on("click",toggle);

document.onreadystatechange = function() { 
	var storedTheme = localStorage.getItem("theme");
	if  ((!storedTheme) || (storedTheme === "dark")) {
		darkTheme();
	} else if (storedTheme === "light") {
		lightTheme();
	} 
}
