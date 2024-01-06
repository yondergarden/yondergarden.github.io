import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from 'react';

import '../App.css';
import Background from "../components/Background"


const Home = () => {

  const [aboutOpen, setAboutOpen] = useState(false);
  const [episodesOpen, setEpisodesOpen] = useState(false);

  let episodesMenuImage = "https://i.imgur.com/tHMXkUr.png"
  let merchMenuImage = "https://i.imgur.com/EEKI1Td.png"
  let aboutMenuImage = "https://i.imgur.com/ZjdrIPQ.png"
  let premiumMenuImage = "https://i.imgur.com/UHet8Vq.png"
  let titleImage = "https://i.imgur.com/11iaWFH.png"
  let backgroundImage = "https://i.imgur.com/jUZxv1T.gif"
  let yonderGrassImage = "https://cdn.glitch.global/4a3253fe-3104-44d3-8a31-8f43e023369d/grassLandscape.png?v=1702081026940"
  let yonderFrameImage = "https://i.imgur.com/Sz5hzol.png"

  // Function to preload images
  function preloadImage(url) {
    var img = new Image();
    img.src = url;
  }

  //Function to preload hover images
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

  useEffect(() => {
    console.log(episodesOpen)
  },[episodesOpen])

  const DisplayInfo = () => {
    return (
      <div>
        <div className="menu-container center-home">
          <div className='info-box'>
            <button type="button" className="closeButton" onClick={() => {setAboutOpen(false); console.log(aboutOpen)}}>x</button>
          </div>
        </div>
      </div>
    );
  };

  const DisplayEpisodes = () => {
    return (
      <div>
        <div className="menu-container center-home">
          <div className='episodes-box'>
            <button type="button" className="closeButton" onClick={() => {setEpisodesOpen(false); console.log(aboutOpen)}}>x</button>
            <div class="episodes-icon-container">
              <video  class="episodes-icon-new" autoPlay muted loop>
                <source src="https://i.imgur.com/Y7YYUkr.mp4" type="video/mp4"/>
                  Your browser does not support the video tag.
              </video>
              <video class="episodes-icon" autoPlay muted loop>
                <source src="https://i.imgur.com/u8Hq4Sp.mp4" type="video/mp4"/>
                  Your browser does not support the video tag.
              </video>
              <video class="episodes-icon" autoPlay muted loop>
                <source src="https://i.imgur.com/SEHtwdy.mp4" type="video/mp4"/>
                  Your browser does not support the video tag.
              </video>
              <img class="episodes-icon" src="https://placekitten.com/100/102" alt="Cat 3" />
              <img class="episodes-icon" src="https://placekitten.com/100/103" alt="Cat 4" />
              <img class="episodes-icon" src="https://placekitten.com/100/104" alt="Cat 5" />
              <img class="episodes-icon" src="https://placekitten.com/100/100" alt="Cat 1" />
              <img class="episodes-icon" src="https://placekitten.com/100/101" alt="Cat 2" />
              <img class="episodes-icon" src="https://placekitten.com/100/102" alt="Cat 3" />
              <img class="episodes-icon" src="https://placekitten.com/100/103" alt="Cat 4" />
              <img class="episodes-icon" src="https://placekitten.com/100/104" alt="Cat 5" />
              <img class="episodes-icon" src="https://placekitten.com/100/100" alt="Cat 1" />
              <img class="episodes-icon" src="https://placekitten.com/100/101" alt="Cat 2" />
              <img class="episodes-icon" src="https://placekitten.com/100/102" alt="Cat 3" />
              <img class="episodes-icon" src="https://placekitten.com/100/103" alt="Cat 4" />
              <img class="episodes-icon" src="https://placekitten.com/100/104" alt="Cat 5" />
              <img class="episodes-icon" src="https://placekitten.com/100/100" alt="Cat 1" />
              <img class="episodes-icon" src="https://placekitten.com/100/101" alt="Cat 2" />
              <img class="episodes-icon" src="https://placekitten.com/100/101" alt="Cat 2" />
              <img class="episodes-icon" src="https://placekitten.com/100/102" alt="Cat 3" />
              <img class="episodes-icon" src="https://placekitten.com/100/103" alt="Cat 4" />
              <img class="episodes-icon" src="https://placekitten.com/100/104" alt="Cat 5" />
              <img class="episodes-icon" src="https://placekitten.com/100/100" alt="Cat 1" />
              <img class="episodes-icon" src="https://placekitten.com/100/101" alt="Cat 2" />
              <img class="episodes-icon" src="https://placekitten.com/100/101" alt="Cat 2" />
              <img class="episodes-icon" src="https://placekitten.com/100/102" alt="Cat 3" />
              <img class="episodes-icon" src="https://placekitten.com/100/103" alt="Cat 4" />
              <img class="episodes-icon" src="https://placekitten.com/100/104" alt="Cat 5" />
              <img class="episodes-icon" src="https://placekitten.com/100/100" alt="Cat 1" />
              <img class="episodes-icon" src="https://placekitten.com/100/101" alt="Cat 2" />
              <img class="episodes-icon" src="https://placekitten.com/100/101" alt="Cat 2" />
              <img class="episodes-icon" src="https://placekitten.com/100/102" alt="Cat 3" />
              <img class="episodes-icon" src="https://placekitten.com/100/103" alt="Cat 4" />
              <img class="episodes-icon" src="https://placekitten.com/100/104" alt="Cat 5" />
              <img class="episodes-icon" src="https://placekitten.com/100/100" alt="Cat 1" />
              <img class="episodes-icon" src="https://placekitten.com/100/101" alt="Cat 2" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const DisplayBackground = () => {
    return (
      <div>
          <img className="center-home layer-2" src={titleImage} alt="" />

          {/* <img className="center-home layer-50 " src={yonderFrameImage} alt="" /> */}

        <div className='bind-bg'>
          <img className="bg-align" src={backgroundImage} alt="" />
          <img className="bg-align" src={backgroundImage} alt="" />
          <img className="bg-align" src={backgroundImage} alt="" />
          <img className="bg-align" src={backgroundImage} alt="" />
          <img className="bg-align" src={backgroundImage} alt="" />
          <img className="bg-align" src={backgroundImage} alt="" />
          <img className="bg-align" src={backgroundImage} alt="" />
        </div>
        <div className='bind-bg'>
          <img className="bg-align" src={yonderGrassImage} alt="" />
          <img className="bg-align" src={yonderGrassImage} alt="" />
          <img className="bg-align" src={yonderGrassImage} alt="" />
          <img className="bg-align" src={yonderGrassImage} alt="" />
          <img className="bg-align" src={yonderGrassImage} alt="" />
          <img className="bg-align" src={yonderGrassImage} alt="" />
          <img className="bg-align" src={yonderGrassImage} alt="" />
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
        <img id="episodes-button" className="image-button" onClick={() => {setEpisodesOpen(true); console.log(episodesOpen)}} src={episodesMenuImage} alt="" />
        <img id="premium-button" className="image-button" src={premiumMenuImage} alt="" />
        <img id="merch-button" className="image-button spin-hover" src={merchMenuImage} alt="" />
        <img id="about-button" className="image-button" onClick={() => {setAboutOpen(true); console.log(aboutOpen)}} src={aboutMenuImage} alt="" />
      </div>
    );
  }

  return (
      <header>
        <body>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/>
        <DisplayBackground />
        {(episodesOpen || aboutOpen) ? null : <DisplayMenu />}
        {episodesOpen ? <DisplayEpisodes/> : null}
        {aboutOpen ? <DisplayInfo/> : null}
        </body>
      </header>

  );
}

export default Home;
