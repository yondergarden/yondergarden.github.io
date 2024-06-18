import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import LockComponent from '../components/Lock';
import Computer from '../components/Computer';
import episodesData from '../episodes.json'; // Assuming episodes.json exports an array of episodes
import Background from "../components/Background/Background"
import "./EpisodesPage.css";


const EpisodesPage = () => {
  const navigate = useNavigate();
  
  // Extract the final number from the path
  const extractNumberFromPath = () => {
    const path = window.location.pathname;
    const match = path.match(/\/(\d+)$/);
    return match ? parseInt(match[1], 10) : null;
  };

  const lastEpisodeNum = episodesData.length > 0 ? episodesData[episodesData.length - 1].id : null;
  const [orientation, setOrientation] = useState(
    window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
  );
  const [currentEpisode, setCurrentEpisode] = useState(() => {
    const initialEpisodeNumber = extractNumberFromPath();
    return episodesData.find(episode => episode.id === initialEpisodeNumber) || episodesData[0];
  });

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
    const episodeNumber = currentEpisode.id;
    const newEpisodeNumber = episodeNumber + delta;

    if (newEpisodeNumber > 0 && newEpisodeNumber <= lastEpisodeNum) {
      const newEpisode = episodesData.find(episode => episode.id === newEpisodeNumber);
      if (newEpisode) {
        setCurrentEpisode(newEpisode);
        navigate(`/episodes/${newEpisodeNumber}`, { replace: true });
      }
    }
  };

  const GoToFirstEpisode = () => {
    const newEpisode = episodesData.find(episode => episode.id === 1);
    if (newEpisode) {
      setCurrentEpisode(newEpisode);
      navigate(`/episodes/1`, { replace: true });
    }
  };

  const GoToLastEpisode = () => {
    const newEpisode = episodesData.find(episode => episode.id === lastEpisodeNum);
    if (newEpisode) {
      setCurrentEpisode(newEpisode);
      navigate(`/episodes/${lastEpisodeNum}`, { replace: true });
    }
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

  const isPremium = currentEpisode ? currentEpisode.premium : false;
  const videoSrc = currentEpisode ? (orientation === 'landscape' ? currentEpisode.mp4landscape : currentEpisode.mp4portrait) : '';

  return (
    <div>
      {/* <video className="center-home layer-50 episodeVideo" autoPlay muted loop playsInline>
        <source className="" src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <video className="menu-container center-home layer-50 episodeVideo" autoPlay muted loop playsInline>
        <source className="" src={currentEpisode.mp4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Background />
      <Routes>
        {episodesData.map(episode => (
          <Route
            key={episode.id}
            path={`/episodes/${episode.id}`}
            element={<EpisodesPage episode={episode}/>}
          />
        ))}
      </Routes>
      {isPremium && <LockComponent />}
      {isPremium && <Computer />}
      <EpisodeNavOverlay />
    </div>
  );
};

export default EpisodesPage;
