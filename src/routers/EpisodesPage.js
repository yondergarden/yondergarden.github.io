import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LockComponent from '../components/Lock';
import Computer from '../components/Computer';
import episodesData from '../episodes.json'; // Assuming episodes.json exports an array of episodes
import "./EpisodesPage.css";

const EpisodesPage = () => {
  const navigate = useNavigate();
  const lastEpisodeNum = episodesData.length > 0 ? episodesData[episodesData.length - 1].id : null;
  const [orientation, setOrientation] = useState(
    window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
  );

  useEffect(() => {
    const handleOrientationChange = () => {
      const newOrientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
      if (newOrientation !== orientation) {
        setOrientation(newOrientation);
      }
    };

    // Set initial orientation on component mount
    setOrientation(window.innerWidth > window.innerHeight ? 'landscape' : 'portrait');

    window.addEventListener('resize', handleOrientationChange);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, [orientation]); // Ensure to include 'orientation' in the dependencies array

  const EpisodeDeltaChange = (delta) => {
    const episodeNumber = extractNumberFromPath();
    const newEpisodeNumber = episodeNumber + delta;

    if (newEpisodeNumber !== 0 && newEpisodeNumber <= lastEpisodeNum) {
      const pageUrl = `/episodes/${newEpisodeNumber}`;
      navigate(pageUrl);
      window.location.reload(); // Force a page reload after navigation
    }
  };

  const GoToFirstEpisode = () => {
    const pageUrl = `/episodes/1`;
    navigate(pageUrl);
    window.location.reload(); // Force a page reload after navigation
  };

  const GoToLastEpisode = () => {
    const pageUrl = `/episodes/${lastEpisodeNum}`;
    navigate(pageUrl);
    window.location.reload(); // Force a page reload after navigation
  };

  // Extract the final number from the path
  const extractNumberFromPath = () => {
    const path = window.location.hash;
    const match = path.match(/\/(\d+)$/);
    return match ? parseInt(match[1], 10) : null;
  };

  const EpisodeNavOverlay = () => {
    const prevEpisodeImage = "https://i.imgur.com/406r8SJ.png";
    const nextEpisodeImage = "https://i.imgur.com/Hr3ksRH.png";
    const homeImage = "https://i.imgur.com/aVb7ICI.png";
    const firstButtonImage = "https://i.imgur.com/bFI6htT.png";
    const lastButtonImage = "https://i.imgur.com/fVw0T7Z.png";

    return (
      <div className="center-home interactive-layer-1000">
        <div className="episode-nav-stack">
          <img className="episode-nav-button" onClick={() => GoToFirstEpisode()} src={firstButtonImage} alt="" />
          <img className="episode-nav-button" onClick={() => EpisodeDeltaChange(-1)} src={prevEpisodeImage} alt="" />
          <img className="episode-nav-button" onClick={() => navigate('/')} src={homeImage} alt="" />
          <img className="episode-nav-button" onClick={() => EpisodeDeltaChange(1)} src={nextEpisodeImage} alt="" />
          <img className="episode-nav-button" onClick={() => GoToLastEpisode()} src={lastButtonImage} alt="" />
        </div>
      </div>
    );
  };

  const episodeNumber = extractNumberFromPath();
  const currentEpisode = episodesData.find(episode => episode.id === episodeNumber);
  const isPremium = currentEpisode ? currentEpisode.premium : false;
  const videoSrc = currentEpisode ? (orientation === 'landscape' ? currentEpisode.mp4landscape : currentEpisode.mp4portrait) : '';

  return (
    <div>
      <video className="center-home layer-50 episodeVideo" autoPlay muted loop playsInline>
        <source className="" src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {isPremium && <LockComponent />}
      {isPremium && <Computer />}
      <EpisodeNavOverlay />
    </div>
  );
};

export default EpisodesPage;
