import React from 'react';
import Background from '../components/Background/EpisodeBackground';
import "./EpisodesPage.css"


const EpisodesPage = (props) => {
  const episodesData = require('../episodes.json');
  const lastEpisodeNum = episodesData.length > 0 ? episodesData[episodesData.length - 1].id : null;

  const EpisodeDeltaChange = (delta) =>{

    const episodeNumber = extractNumberFromPath();
    const newEpisodeNumber = episodeNumber + delta

    if(newEpisodeNumber!==0 && newEpisodeNumber <= lastEpisodeNum){
      const pageUrl = "../episodes/".concat(newEpisodeNumber);
      window.location.href = pageUrl;
    }
  }

  const RouteChange = (pageUrl) =>{
    window.location.href = pageUrl;
  }

  // Extract the final number from the path
  const extractNumberFromPath = () => {
    const path = window.location.pathname;
    const match = path.match(/\/(\d+)$/);
    return match ? parseInt(match[1], 10) : null;
  };

  const EpisodeNavOverlay = () => {

    const prevEpisodeImage = "https://i.imgur.com/406r8SJ.png"
    const nextEpisodeImage = "https://i.imgur.com/Hr3ksRH.png"
    const homeImage = "https://i.imgur.com/aVb7ICI.png"
    const firstButtonImage = "https://i.imgur.com/bFI6htT.png"
    const lastButtonImage = "https://i.imgur.com/fVw0T7Z.png"

    return (
      <div>
        <div className="center-home interactive-layer-50">
          <div className="episode-nav-stack">
            <img className="episode-nav-button" onClick={() => {RouteChange("/episodes/1")}} src={firstButtonImage} alt=""/>
            <img className="episode-nav-button" onClick={() => {EpisodeDeltaChange(-1)}} src={prevEpisodeImage} alt=""/>
            <img className="episode-nav-button" onClick={() => {RouteChange("/")}} src={homeImage} alt=""/>
            <img className="episode-nav-button" onClick={() => {EpisodeDeltaChange(1)}} src={nextEpisodeImage} alt=""/>
            <img className="episode-nav-button" onClick={() => {RouteChange("/episodes/".concat(lastEpisodeNum))}} src={lastButtonImage} alt=""/>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Background/>
      <video className="center-home" autoPlay muted loop>
          <source className="" src={props.episode.mp4} type="video/mp4"/>
          Your browser does not support the video tag.
      </video>
      <EpisodeNavOverlay/>
    </div>
  );
};

export default EpisodesPage;
