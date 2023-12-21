import '../App.css';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


function Home() {


  const [aboutOpen, setAboutOpen] = useState(false);

  let backgroundImage = "https://cdn.glitch.global/4a3253fe-3104-44d3-8a31-8f43e023369d/circles.gif?v=1702433383009"
  let yonderFrameImage = "https://cdn.glitch.global/4a3253fe-3104-44d3-8a31-8f43e023369d/yonderGardenFrameFg.png?v=1702515498646"
  let yonderGrassImage = "https://cdn.glitch.global/4a3253fe-3104-44d3-8a31-8f43e023369d/grassLandscape.png?v=1702081026940"
  let titleImage = "https://cdn.glitch.global/4a3253fe-3104-44d3-8a31-8f43e023369d/yonderGardenFrameBackgroundWords.png?v=1702515532263"

  let episodesMenuImage = "https://cdn.glitch.global/4a3253fe-3104-44d3-8a31-8f43e023369d/websiteButtons_0001_Episodes-copy.png?v=1702518334396"
  let merchMenuImage = "https://cdn.glitch.global/4a3253fe-3104-44d3-8a31-8f43e023369d/websiteButtons_0003_Merch-copy.png?v=1702518333830"
  let aboutMenuImage = "https://cdn.glitch.global/4a3253fe-3104-44d3-8a31-8f43e023369d/websiteButtons_0002_About-copy.png?v=1702518334131"
  let afterDarkMenuImage = "https://cdn.glitch.global/4a3253fe-3104-44d3-8a31-8f43e023369d/websiteButtons_0000_Layer-1-copy.png?v=1702518334889"

  let navigate = useNavigate();

  const RouteChange = (pageUrl) =>{
    navigate(pageUrl);
  }

  useEffect(() => {
    console.log(aboutOpen)
  },[aboutOpen])

  const DisplayInfo = () => {
    return (
      <div>
        <div className="rectangle"></div>
        <button type="button" className="closeButton" onClick={() => {setAboutOpen(false); console.log(aboutOpen)}}>X</button>
        <h1 className="textHeading">Yonder Garden:</h1>
      </div>
    );
  };

  const DisplayBackground = () => {

    console.log(window.length)
    console.log(window.height)

    return (
      <div>
        <img className="center-home layer-50 no-events" src={titleImage} alt="logo" />
        <img className="center-home layer-1 no-events" src={backgroundImage} alt="logo" />
        <img className="center-home layer-50 no-events" src={yonderFrameImage} alt="logo" />
        <img className="center-home layer-1 no-events" src={yonderGrassImage} alt="logo" />
    
        <img className="center-home layer-0 no-events offset-bg-right" src={backgroundImage} alt="logo" />
        <img className="center-home layer-1 no-events offset-bg-right" src={yonderGrassImage} alt="logo" />
        
        <img className="center-home layer-0 no-events offset-bg-left" src={backgroundImage} alt="logo" />
        <img className="center-home layer-1 no-events offset-bg-left" src={yonderGrassImage} alt="logo" />
      </div>
    );
  }

  return (
      <header>
        <body >
        <DisplayBackground />
        <div className="menu-container center-home">
          <img className="image-button" onClick={() => { RouteChange("episodes"); console.log("episode onClick");}} src={episodesMenuImage} alt="logo" />
          <img className="image-button" onClick={() => {setAboutOpen(true); console.log(aboutOpen)}} src={aboutMenuImage} alt="logo" />  
          <img className="image-button spin-hover" src={merchMenuImage} alt="logo" />  
          <img className="image-button App-logo" src={afterDarkMenuImage} alt="logo" /> 
        </div>
        </body>
        {aboutOpen ? <DisplayInfo/> : null}
      </header>

  );
}

export default Home;
