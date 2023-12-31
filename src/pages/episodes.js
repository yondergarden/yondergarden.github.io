import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Buttons from "./buttons";
import '../Episodes.css';


const Home = () => {


  const [aboutOpen, setAboutOpen] = useState(false);
  const [episodesOpen, setEpisodesOpen] = useState(false);

  let backgroundImage = "https://i.imgur.com/qab6HoQ.mp4"
  let episodeVideo = "https://i.imgur.com/LRppOQ7.mp4"
  let yonderGrassImage = "https://cdn.glitch.global/4a3253fe-3104-44d3-8a31-8f43e023369d/grassLandscape.png?v=1702081026940"
  let titleImage = "https://cdn.glitch.global/4a3253fe-3104-44d3-8a31-8f43e023369d/yonderGardenFrameBackgroundWords.png?v=1702515532263"
  // let episodesMenuImage = "https://i.imgur.com/tHMXkUr.png"
  // let merchMenuImage = "https://i.imgur.com/EEKI1Td.png"
  // let aboutMenuImage = "https://i.imgur.com/ZjdrIPQ.png"
  // let premiumMenuImage = "https://i.imgur.com/UHet8Vq.png"

  // Function to preload hover images
  function preloadImage(url) {
    var img = new Image();
    img.src = url;
  }

  // Preload the hover images
  preloadImage('https://i.imgur.com/f6gNmHR.png');
  preloadImage('https://i.imgur.com/Hj4Ehh7.png');
  preloadImage('https://i.imgur.com/M0NZyfJ.png');
  preloadImage('https://i.imgur.com/xDGevDU.png');


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
          <div className='bind-bg'>
            <video className="test-bg-align" autoPlay muted loop>
                <source src={backgroundImage} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <video className="test-bg-align" autoPlay muted loop>
                <source src={backgroundImage} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <video className="test-bg-align" autoPlay muted loop>
                <source src={backgroundImage} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <video className="test-bg-align" autoPlay muted loop>
                <source src={backgroundImage} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <video className="test-bg-align" autoPlay muted loop>
                <source src={backgroundImage} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <video className="test-bg-align" autoPlay muted loop>
                <source src={backgroundImage} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <video className="test-bg-align" autoPlay muted loop>
                <source src={backgroundImage} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
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
          // <video className="center-home layer-50" autoPlay muted loop>
          //     <source src={episodeVideo} type="video/mp4"/>
          //     Your browser does not support the video tag.
          // </video>
          <img className="center-home layer-1 " src={yonderGrassImage} alt="" />
        </div>
      );
  }

  const DisplayMenu = () => {

    return (
      <div className="menu-container center-home">
      </div>
    );
  }

  return (
      <header>
        <body>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/>
        <DisplayBackground />
        {aboutOpen ? <DisplayInfo/> : <DisplayMenu />}
        </body>
      </header>

  );
}

export default Home;
