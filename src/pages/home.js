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
        <div className="menu-container center-home">
          <div className='info-box'>
            <button type="button" className="closeButton" onClick={() => {setAboutOpen(false); console.log(aboutOpen)}}>X</button>
            <h1 className="text-heading">Yonder Garden:</h1>
            <p> This is where the information for Yonder Garden would go... If there was any ^.^</p>
          </div>
        </div>
      </div>
    );
  };

  const DisplayBackground = () => {

    return (
      <div>
        <img className="center-home layer-50 " src={titleImage} alt="" />
        <img className="center-home layer-1 " src={backgroundImage} alt="" />
        <img className="center-home layer-50 " src={yonderFrameImage} alt="" />
        <img className="center-home layer-1 " src={yonderGrassImage} alt="" />
    
        <img className="center-home layer-0 offset-bg-right" src={backgroundImage} alt="" />
        <img className="center-home layer-1 offset-bg-right" src={yonderGrassImage} alt="" />
        
        <img className="center-home layer-0 offset-bg-left" src={backgroundImage} alt="" />
        <img className="center-home layer-1 offset-bg-left" src={yonderGrassImage} alt="" />
      </div>
    );
  }

  const DisplayMenu = () => {

    return (
      <div className="menu-container center-home">
        <img className="image-button" onClick={() => { RouteChange("episodes"); console.log("episode onClick");}} src={episodesMenuImage} alt="logo" />
        <img className="image-button" onClick={() => {setAboutOpen(true); console.log(aboutOpen)}} src={aboutMenuImage} alt="logo" />  
        <img className="image-button spin-hover" src={merchMenuImage} alt="logo" />  
        <img className="image-button App-logo" src={afterDarkMenuImage} alt="logo" /> 
    </div>
    );
  }

  return (
      <header>
        <body >
        <DisplayBackground />
        {aboutOpen ? <DisplayInfo/> : <DisplayMenu />}
        </body>
      </header>

  );
}

export default Home;
