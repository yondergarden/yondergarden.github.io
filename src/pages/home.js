import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Buttons from "./buttons";
import '../App.css';


const Home = () => {


  const [aboutOpen, setAboutOpen] = useState(false);

  let backgroundImage = "https://cdn.glitch.global/4a3253fe-3104-44d3-8a31-8f43e023369d/circles.gif?v=1702433383009"
  let yonderFrameImage = "https://cdn.glitch.global/4a3253fe-3104-44d3-8a31-8f43e023369d/yonderGardenFrameFg.png?v=1702515498646"
  let yonderGrassImage = "https://cdn.glitch.global/4a3253fe-3104-44d3-8a31-8f43e023369d/grassLandscape.png?v=1702081026940"
  let titleImage = "https://cdn.glitch.global/4a3253fe-3104-44d3-8a31-8f43e023369d/yonderGardenFrameBackgroundWords.png?v=1702515532263"
  let episodesMenuImage = "https://i.imgur.com/0ZaNojS.png"
  let episodesMenuImageHover = "https://i.imgur.com/Ce4NMJ4.png"
  let merchMenuImage = "https://i.imgur.com/T2FqH5l.png"
  let merchMenuImageHover = "https://i.imgur.com/3JhojrH.png"
  let aboutMenuImage = "https://i.imgur.com/SPmRVGn.png"
  let aboutMenuImageHover = "https://i.imgur.com/lWLPQc5.png"
  let premiumMenuImage = "https://i.imgur.com/tsffzkB.png"
  let premiumMenuImageHover = "https://i.imgur.com/b8CvcMX.png"

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
          <img className="center-home layer-51" src={titleImage} alt="" />

          {/* <img className="center-home layer-50 " src={yonderFrameImage} alt="" /> */}

        <div className='bind-bg'>
          <img className="test-bg-align" src={backgroundImage} alt="" />
          <img className="test-bg-align" src={backgroundImage} alt="" />
          <img className="test-bg-align" src={backgroundImage} alt="" />
          <img className="test-bg-align" src={backgroundImage} alt="" />
          <img className="test-bg-align" src={backgroundImage} alt="" />
          <img className="test-bg-align" src={backgroundImage} alt="" />
          <img className="test-bg-align" src={backgroundImage} alt="" />
        </div>
        <div className='bind-bg'>
          <img className="test-bg-align" src={yonderGrassImage} alt="" />
          <img className="test-bg-align" src={yonderGrassImage} alt="" />
          <img className="test-bg-align" src={yonderGrassImage} alt="" />
          <img className="test-bg-align" src={yonderGrassImage} alt="" />
          <img className="test-bg-align" src={yonderGrassImage} alt="" />
          <img className="test-bg-align" src={yonderGrassImage} alt="" />
          <img className="test-bg-align" src={yonderGrassImage} alt="" />
        </div>

          <img className="center-home layer-50 " src={yonderFrameImage} alt="" />

          {/* <img className="center-home layer-1 offset-bg-right" src={yonderGrassImage} alt="" /> */}
          {/* <img className="center-home layer-1 offset-bg-right" src={yonderGrassImage} alt="" /> */}


          <img className="center-home layer-1 " src={yonderGrassImage} alt="" />
          {/* <img className="center-home layer-1" src={backgroundImage} alt="" /> */}

          {/* <img className="center-home layer-0 offset-bg-right" src={backgroundImage} alt="" /> */}
          {/* <img className="center-home layer-1 offset-bg-right" src={yonderGrassImage} alt="" /> */}

          {/* <img className="center-home layer-0 offset-bg-left" src={backgroundImage} alt="" />
          <img className="center-home layer-1 offset-bg-left" src={yonderGrassImage} alt="" /> */}
      </div>
      );
  }

  const DisplayMenu = () => {

    return (
      <div className="menu-container center-home">
        <img className="image-button-episodes" onClick={() => { RouteChange("episodes"); console.log("episode onClick");}} src={episodesMenuImage} alt="" />
        <img className="image-button-premium" src={premiumMenuImage} alt="" />
        <img className="image-button-merch spin-hover" src={merchMenuImage} alt="" />
        <img className="image-button-about" onClick={() => {setAboutOpen(true); console.log(aboutOpen)}} src={aboutMenuImage} alt="" />
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
