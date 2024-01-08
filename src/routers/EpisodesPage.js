import React from 'react';
import Background from '../components/Background/Background';
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
    
    const prevEpisodeImage = "https://i.imgur.com/hnZvKUT.png"
    const nextEpisodeImage = "https://i.imgur.com/z1zWO61.png"
    const homeImage = "https://i.imgur.com/YdaGrnF.png"
    const firstButtonImage = "https://i.imgur.com/SEHUER9.png"
    const lastButtonImage = "https://i.imgur.com/zBJHJpv.png"

    return (
      <div>
        <div className="center-home menu-container interactive-layer-50">
          <div className="episode-nav-stack move-nav-left">
            <img className="episode-nav-button" onClick={() => {EpisodeDeltaChange(-1)}} src={prevEpisodeImage} alt=""/>
            <img className="episode-nav-button" onClick={() => {RouteChange("/episodes/1")}} src={firstButtonImage} alt=""/>
          </div>
          <div className="episode-nav-stack move-nav-right">
            <img className="episode-nav-button" onClick={() => {EpisodeDeltaChange(1)}} src={nextEpisodeImage} alt=""/>
            <img className="episode-nav-button" onClick={() => {RouteChange("/episodes/".concat(lastEpisodeNum))}} src={lastButtonImage} alt=""/>
          </div>
          <img className="episode-nav center-nav-home" onClick={() => {RouteChange("/")}} src={homeImage} alt=""/>
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
