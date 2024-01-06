import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from 'react';

import '../styles/Home.css'
import '../styles/Yonder.css'
import Background from "../components/Background/Background"


const Home = () => {

  const [episodesOpen, setEpisodesOpen] = useState(false);
  const [premiumOpen, setPremiumOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);


  let episodesMenuImage = "https://i.imgur.com/tHMXkUr.png"
  let merchMenuImage = "https://i.imgur.com/EEKI1Td.png"
  let aboutMenuImage = "https://i.imgur.com/ZjdrIPQ.png"
  let premiumMenuImage = "https://i.imgur.com/UHet8Vq.png"


  // Function to preload images
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

  // Used to navigate to pages
  const RouteChange = (pageUrl) =>{
    navigate(pageUrl);
  }

  useEffect(() => {
    console.log(episodesOpen)
  },[episodesOpen])

  useEffect(() => {
    console.log(premiumOpen)
  },[premiumOpen])

  useEffect(() => {
    console.log(aboutOpen)
  },[aboutOpen])

  const DisplayEpisodes = () => {
    return (
      <div>
        <div className="menu-container center-home">
          <div className='episodes-box'>
            <button type="button" className="closeButton" onClick={() => {setEpisodesOpen(false); console.log(aboutOpen)}}>&#128162;</button>
            <div class="episodes-icon-container">
              <video  class="episodes-icon" autoPlay muted loop>
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

  const DisplayInfo = () => {
    return (
      <div>
        <div className="menu-container center-home">
          <div className='info-box'>
            <button type="button" className="closeButton" onClick={() => {setAboutOpen(false); console.log(aboutOpen)}}>&#128162;</button>
          </div>
        </div>
      </div>
    );
  };

  const DisplayMenu = () => {

    return (
      <div className="menu-container center-home">
        <img id="episodes-button" className="image-button" onClick={() => {setEpisodesOpen(true); console.log(episodesOpen)}} src={episodesMenuImage} alt="" />
        <img id="premium-button" className="image-button" onClick={() => {setPremiumOpen(true); console.log(premiumOpen)}} src={premiumMenuImage} alt=""  />
        <img id="merch-button" className="image-button spin-hover" src={merchMenuImage} alt="" />
        <img id="about-button" className="image-button" onClick={() => {setAboutOpen(true); console.log(aboutOpen)}} src={aboutMenuImage} alt="" />
      </div>
    );
  }

  return (
      <header>
        <body>
        <Background />
        {(episodesOpen || aboutOpen) ? null : <DisplayMenu />}
        {episodesOpen ? <DisplayEpisodes/> : null}
        {aboutOpen ? <DisplayInfo/> : null}
        </body>
      </header>

  );
}

export default Home;
