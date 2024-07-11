import { useState, useEffect } from "react";
import React from 'react';
import '../styles/Home.css';
import '../styles/Yonder.css';
import { Link } from 'react-router-dom';

function usePreventScroll() {
  useEffect(() => {
    // Detect if the user is on an iOS device
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (!isIOS) {
      return;
    }

    const handleTouchMove = (event) => {
      event.preventDefault();
    };

    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
}

const Home = () => {
  const [episodesOpen, setEpisodesOpen] = useState(false);
  const [subscribeOpen, setSubscribeOpen] = useState(false);
  const [premiumOpen, setPremiumOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const episodesData = require('../episodes.json');

  let episodesMenuImage = "https://yondergarden.s3.us-east-2.amazonaws.com/defaultassets/_0004_episodesButton.png";
  let subscribeMenuImage = "https://yondergarden.s3.us-east-2.amazonaws.com/defaultassets/_0005_subscribeButton.png";
  let aboutMenuImage = "https://yondergarden.s3.us-east-2.amazonaws.com/defaultassets/_0007_aboutButton.png";
  let premiumMenuImage = "https://yondergarden.s3.us-east-2.amazonaws.com/defaultassets/_0006_premiumButton.png";

  // Function to preload images
  function preloadImage(url) {
    var img = new Image();
    img.src = url;
  }

  // Preload the hover images
  preloadImage('https://yondergarden.s3.us-east-2.amazonaws.com/defaultassets/_0000_episodesButtonHover.png');
  preloadImage('https://yondergarden.s3.us-east-2.amazonaws.com/defaultassets/_0001_subscribeButtonHover.png');
  preloadImage('https://yondergarden.s3.us-east-2.amazonaws.com/defaultassets/_0002_premiumButtonHover.png');
  preloadImage('https://yondergarden.s3.us-east-2.amazonaws.com/defaultassets/_0003_aboutButtonHover.png');

  const EpisodeSelect = (episodeNumber) => {
    const episodesUrl = `#/episodes/${episodeNumber}`;
    window.location.href = episodesUrl;
  };

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
          submit
        </button>
      </div>
    );
  };

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
            <button type="button" className="closeButton" onClick={() => { setEpisodesOpen(false) }}>x</button>
            <h1 className="unifrakturFont menuBoxTitle">episodes</h1>
            <div className="episodes-icon-container">
              {thumbnailList.map(({ id, title, thumbnail }) => (
                <div className="episodes-icon-wrapper" key={id}>
                  <video className="episodes-icon" id={id} autoPlay muted loop playsInline onClick={() => { EpisodeSelect(id) }}>
                    <source src={thumbnail} type="video/mp4" />
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

  const DisplaySubscribe = () => {
    return (
      <div>
        <div className="menu-container center-home">
          <div className='info-box'>
            <button type="button" className="closeButton" onClick={() => { setSubscribeOpen(false) }}>x</button>
              <h1 className="unifrakturFont menuBoxTitle">subscribe!</h1>
              <p className="simple-centered" style={{fontSize: 'calc(var(--vh, 1vh) * 2.5)'}}><i>Follow Yonder Garden</i></p>
              <p className="simple-centered" style={{fontSize: 'calc(var(--vh, 1vh) * 2.5)'}}><i>and never miss an episode!</i></p>
              <div className="social-links">
                <a href="https://www.patreon.com/yondergarden" target="_blank" rel="noopener noreferrer">
                  <img src="https://seeklogo.com/images/P/patreon-logo-C0B52F951B-seeklogo.com.png" alt="Patreon" width="32" height="32" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-256.png" alt="Instagram" width="32" height="32" />
                </a>
                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn1.iconfinder.com/data/icons/social-media-2293/32/tiktok-256.png" alt="TikTok" width="32" height="32" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn4.iconfinder.com/data/icons/social-media-black-white-2/1227/X-256.png" alt="Twitter" width="32" height="32" />
                </a>
                <a href="https://www.tumblr.com" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Tumblr5_svg-256.png" alt="Tumblr" width="32" height="32" />
                </a>
                <a href="https://www.reddit.com" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn0.iconfinder.com/data/icons/picons-social/57/75-reddit-2-256.png" alt="Reddit" width="32" height="32" />
                </a>
              </div>
          </div>
        </div>
      </div>
    )
  }

  const DisplayPremium = () => {
    return (
      <div>
        <div className="menu-container center-home premium-box">
        </div>
      </div>
    );
  };

  const DisplayInfo = () => {
    return (
      <div>
        <div className="menu-container center-home">
          <div className='info-box'>
            <button type="button" className="closeButton" onClick={() => { setAboutOpen(false) }}>x</button>
            <div className="about-info">
              <h1 className="unifrakturFont">about</h1>
              <h2><i>Yonder Garden is an animated webcomic that comes in 2 flavors.</i></h2>
              <div className="boxes">
                <div className="rectangle">
                  <h3 className="simple-centered unifrakturFont">Ephemeralia</h3>
                  <p>Comic strips unimportant or irrelevant to the main storyline. These can be read in any order.</p>
                </div>
                <div className="rectangle" id="theMainQuest">
                  <h3 className="simple-centered unifrakturFont">The Main Quest</h3>
                  <p>Long-form episodes that tell the main story over time. <b>The Main Quest is currently locked!</b></p>
                </div>
              </div>
              <div className="progress-container">
                <span className="progress-text"><b>Help unlock the Main Quest!</b> 0/1000 Patrons</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '1%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const DisplayMenu = () => {

    const handleClick = (setter) => {
      if (isTouchDevice) {
        setTimeout(() => {
          setter(true);
        }, 250);
      } else {
        setter(true);
      }
    }

    return (
      <div className="menu-container center-home">
        <img id="episodes-button" className="image-button" onClick={() => handleClick(setEpisodesOpen)} src={episodesMenuImage} alt="" />
        <img id="subscribe-button" className="image-button spin-hover" onClick={() => handleClick(setSubscribeOpen)} src={subscribeMenuImage} alt="" />
        <a href="https://www.patreon.com/YonderGarden" target="_blank" rel="noopener noreferrer">
          <img id="premium-button" className="image-button" onClick={() => handleClick(setPremiumOpen)} src={premiumMenuImage} alt="" />
        </a>
        <img id="about-button" className="image-button" onClick={() => handleClick(setAboutOpen)} src={aboutMenuImage} alt="" />
      </div>
    );
  }

  useEffect(() => {
    const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(hasTouchScreen);
  }, []);

  usePreventScroll();

  return (
    <>
      <div>
        {episodesOpen && <DisplayEpisodes />}
        {subscribeOpen && <DisplaySubscribe />}
        {aboutOpen && <DisplayInfo />}
        {!episodesOpen && !subscribeOpen && !aboutOpen && <DisplayMenu />}
      </div>
    </>
  );
}

export default Home;
