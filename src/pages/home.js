import { useState, useEffect } from "react";
import React from 'react';
import '../styles/Home.css'
import '../styles/Yonder.css'
import Background from "../components/Background/Background"
import { Link } from 'react-router-dom';


const Home = () => {

  const [episodesOpen, setEpisodesOpen] = useState(false);
  const [premiumOpen, setPremiumOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const episodesData = require('../episodes.json');

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


  const EpisodeSelect = (episodeNumber) => {
    const episodesUrl = `#/episodes/${episodeNumber}`;
    window.location.href = episodesUrl;
  };

  useEffect(() => {
    console.log(episodesOpen)
    console.log(aboutOpen)
    console.log(premiumOpen)
  },[episodesOpen, aboutOpen, premiumOpen])

  const EmailForm = () => {
    const [emailText, setEmailText] = useState('');

    const handleEmailSend = () => {
        fetch("https://wakeful-intriguing-channel.glitch.me/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: emailText }), // Use the key "text"
        });

        // Clear the input field after sending the email
        setEmailText('');
    };

    const handleKeyPress = (e) => {
      // Check if the Enter key is pressed
      if (e.key === 'Enter') {
        handleEmailSend();
      }
    };

    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <input
          type="text"
          placeholder="Enter email address"
          value={emailText}
          onChange={(e) => setEmailText(e.target.value)}
          onKeyPress={handleKeyPress}
          style={{ padding: '8px', marginRight: '8px' }}
        />
        <button onClick={handleEmailSend} style={{ padding: '8px' }}>
          + 𝓢𝓾𝓫𝓶𝓲𝓽  ~
        </button>
      </div>
    );
  };

  useEffect(() => {
    console.log(premiumOpen)
  },[premiumOpen])

  useEffect(() => {
    console.log(aboutOpen)
  },[aboutOpen])

  const DisplayEpisodes = () => {
    const thumbnailList = episodesData.map((episode) => ({
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail
    }));


    return (
      <div>
        <div className="menu-container center-home">
          <div className='episodes-box'>
            <button type="button" className="closeButton" onClick={() => {setEpisodesOpen(false); console.log(aboutOpen)}}>&#128942;</button>
            <h1 className="simple-centered">☆ 𝖊𝖕𝖎𝖘𝖔𝖉𝖊𝖘 ☆</h1>
            <div className="episodes-icon-container">
              {thumbnailList.map(({id, title, thumbnail}) => (
                <div className="episodes-icon-wrapper" key={id}>
                  <video className="episodes-icon" id={id} autoPlay muted loop onClick={() => {EpisodeSelect(id)}}>
                    <source src={thumbnail} type="video/mp4"/>
                    Your browser does not support the video tag.
                  </video>
                  <div className="episode-tooltip">{title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const DisplayPremium = () => {
    return (
      <div>
        <div className="menu-container center-home premium-box">
          <div className='info-box'>
            <button type="button" className="closeButton" onClick={() => {setPremiumOpen(false); console.log(premiumOpen)}}>&#128942;</button>
            <h1 className="simple-centered">♡ 𝖏𝖔𝖎𝖓 𝖜𝖆𝖎𝖙𝖑𝖎𝖘𝖙! ♡</h1>
            <EmailForm />
            <h1 className="simple-centered">&#127804;</h1>
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
            <button type="button" className="closeButton" onClick={() => {setAboutOpen(false); console.log(aboutOpen)}}>&#128942;</button>
            <img className='about-info' src="https://i.imgur.com/77B1oJY.jpeg"/>
          </div>
        </div>
      </div>
    );
  };

  const DisplayMenu = () => {

    return (
      <div className="menu-container center-home">
        <img id="episodes-button" className="image-button" onClick={() => {setEpisodesOpen(true); console.log(episodesOpen)}} src={episodesMenuImage} alt="" />
        <a href="https://www.patreon.com/YonderGarden" target="_blank" rel="noopener noreferrer">
          <img id="premium-button" className="image-button" onClick={() => {setPremiumOpen(true); console.log(premiumOpen)}} src={premiumMenuImage} alt=""/>
        </a>
        <img id="merch-button" className="image-button spin-hover" src={merchMenuImage} alt="" />
        <img id="about-button" className="image-button" onClick={() => {setAboutOpen(true); console.log(aboutOpen)}} src={aboutMenuImage} alt="" />
      </div>
    );
  }

  return (
      <header>
        <body>
        <Background premiumOpen={premiumOpen}  />
        {(episodesOpen || premiumOpen || aboutOpen) ? null : <DisplayMenu />}
        {episodesOpen ? <DisplayEpisodes/> : null}
        {premiumOpen ? <DisplayPremium/> : null}
        {aboutOpen ? <DisplayInfo/> : null}
        </body>
      </header>

  );
}

export default Home;
