import { useState, useEffect } from "react";
import React from 'react';
import '../styles/Home.css';
import '../styles/Yonder.css';
import { Link } from 'react-router-dom';
import assetUrls from '../config/assetUrls';

const Home = () => {
  const [episodesOpen, setEpisodesOpen] = useState(false);
  const [subscribeOpen, setSubscribeOpen] = useState(false);
  const [premiumOpen, setPremiumOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const episodesData = require('../episodes.json');


  const EpisodeSelect = (episodeNumber) => {
    const episodesUrl = `#/episodes/${episodeNumber}`;
    if (isTouchDevice) {
      setTimeout(() => {
        window.location.href = episodesUrl;
      }, 250);
    } else {
      window.location.href = episodesUrl;
    }
  };

  const DisplayEpisodes = () => {
    const [sortOldestFirst, setSortOldestFirst] = useState(false);
    const episodesData = require('../episodes.json');
    const sortedEpisodes = [...episodesData].sort((a, b) => {
      return sortOldestFirst ? a.id - b.id : b.id - a.id;
    });

    // Find the newest episode (last in the sorted array when sorted newest first)
    const newestEpisodeId = !sortOldestFirst ? sortedEpisodes[0].id : sortedEpisodes[sortedEpisodes.length - 1].id;

    const handleSortToggle = () => {
      setSortOldestFirst(!sortOldestFirst);
    };

    return (
      <div>
        <div className="menu-container center-home">
          <div className='episodes-box'>
            <button
              type="button"
              className="closeButton"
              onClick={() => {
                if (isTouchDevice) {
                  setTimeout(() => {
                    setEpisodesOpen(false);
                  }, 250);
                } else {
                  setEpisodesOpen(false);
                }
              }}
            >
              x
            </button>
            <h1 className="unifrakturFont menuBoxTitle">episodes</h1>
            <div className="sort-toggle-container">
              <div
                className="sort-toggle"
                onClick={handleSortToggle}
              >
                {sortOldestFirst ? "oldest first" : "newest first"}
              </div>
            </div>
            <div className="episodes-icon-container">
              {sortedEpisodes.map(({ id, title, thumbnail }) => (
                <div
                  className="episodes-icon-wrapper"
                  key={id}
                  style={{ position: 'relative' }}
                >
                  <video
                    className="episodes-icon"
                    id={id}
                    autoPlay
                    muted
                    loop
                    playsInline
                    onClick={() => { EpisodeSelect(id) }}
                  >
                    <source src={thumbnail} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {id === newestEpisodeId && (
                    <div
                      style={{
                        position: 'absolute',
                        right: 'calc(var(--vh, 1vh) * 0.5)',
                        bottom: 'calc(var(--vh, 1vh) * 1)',
                        color: 'yellow',
                        fontWeight: 'bold',
                        backgroundColor: 'rgba(255,0,0,0.75)',
                        padding: 'calc(var(--vh, 1vh) * 0.25)',
                        borderRadius: 'calc(var(--vh, 1vh) * 0.25)'
                      }}
                    >
                      NEW!
                    </div>
                  )}
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
            <button
              type="button"
              className="closeButton"
              onClick={() => {
                if (isTouchDevice) {
                  setTimeout(() => {
                    setSubscribeOpen(false);
                  }, 250);
                } else {
                  setSubscribeOpen(false);
                }
              }}
            >
              x
            </button>
              <h1 className="unifrakturFont menuBoxTitle">subscribe!</h1>
              <p className="simple-centered" style={{fontSize: 'calc(var(--vh, 1vh) * 2.5)'}}><i>Follow Yonder Garden</i></p>
              <p className="simple-centered" style={{fontSize: 'calc(var(--vh, 1vh) * 2.5)'}}><i>and never miss an episode!</i></p>
              <div className="social-links">
                <a href="https://www.patreon.com/YonderGarden" target="_blank" rel="noopener noreferrer">
                  <img src="https://seeklogo.com/images/P/patreon-logo-C0B52F951B-seeklogo.com.png" alt="Patreon" width="32" height="32" />
                </a>
                <a href="https://www.instagram.com/yondergardener/" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-256.png" alt="Instagram" width="32" height="32" />
                </a>
                <a href="https://www.tiktok.com/@yonder.garden?_t=8o1PVhsX3zW&_r=1" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn1.iconfinder.com/data/icons/social-media-2293/32/tiktok-256.png" alt="TikTok" width="32" height="32" />
                </a>
                <a href="https://twitter.com/yondergardener" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn4.iconfinder.com/data/icons/social-media-black-white-2/1227/X-256.png" alt="Twitter" width="32" height="32" />
                </a>
                <a href="https://www.tumblr.com/blog/yondergarden" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Tumblr5_svg-256.png" alt="Tumblr" width="32" height="32" />
                </a>
                <a href="https://www.reddit.com/user/yondergarden/" target="_blank" rel="noopener noreferrer">
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
            <button
              type="button"
              className="closeButton"
              onClick={() => {
                if (isTouchDevice) {
                  setTimeout(() => {
                    setAboutOpen(false);
                  }, 250);
                } else {
                  setAboutOpen(false);
                }
              }}
            >
              x
            </button>
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
        <img id="episodes-button" className="image-button" onClick={() => handleClick(setEpisodesOpen)} src={assetUrls.episodesMenuImage} alt="" />
        <img id="subscribe-button" className="image-button spin-hover" onClick={() => handleClick(setSubscribeOpen)} src={assetUrls.subscribeMenuImage} alt="" />
        <a
          href="https://www.patreon.com/YonderGarden"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (isTouchDevice) {
              e.preventDefault();
              setTimeout(() => {
                window.open("https://www.patreon.com/YonderGarden", "_blank", "noopener,noreferrer");
              }, 250);
            }
          }}
        >
          <img
            id="premium-button"
            className="image-button"
            onClick={() => setPremiumOpen(true)}
            src={assetUrls.premiumMenuImage}
            alt=""
          />
        </a>
        <img id="about-button" className="image-button" onClick={() => handleClick(setAboutOpen)} src={assetUrls.aboutMenuImage} alt="" />
      </div>
    );
  }

  useEffect(() => {
    const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(hasTouchScreen);
  }, []);


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
