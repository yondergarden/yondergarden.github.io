import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import LockComponent from '../components/Lock';
import Computer from '../components/Computer';
import episodesData from '../episodes.json'; // Assuming episodes.json exports an array of episodes
import Background from "../components/Background/Background";
import PreLoader1 from "../components/PreLoader1"; // Import the loading animation component
import "./EpisodesPage.css";

const EpisodesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract the final number from the path
  const extractNumberFromPath = (path) => {
    const match = path.match(/\/(\d+)$/);
    return match ? parseInt(match[1], 10) : null;
  };

  const lastEpisodeNum = episodesData.length > 0 ? episodesData[episodesData.length - 1].id : null;
  const [orientation, setOrientation] = useState(
    window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
  );
  const [currentEpisode, setCurrentEpisode] = useState(() => {
    const initialEpisodeNumber = extractNumberFromPath(window.location.pathname);
    return episodesData.find(episode => episode.id === initialEpisodeNumber) || episodesData[0];
  });
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const handleOrientationChange = () => {
      const newOrientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
      setOrientation(newOrientation);
    };

    window.addEventListener('resize', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);

  useEffect(() => {
    const episodeNumber = extractNumberFromPath(location.pathname);
    const newEpisode = episodesData.find(episode => episode.id === episodeNumber);
    if (newEpisode) {
      setCurrentEpisode(newEpisode);
    }
  }, [location]);

  useEffect(() => {
    const preloadPanelVideos = () => {
      const videoElements = currentEpisode.episode_panels.map((src) => {
        return new Promise((resolve) => {
          const video = document.createElement('video');
          video.src = src;
          video.onloadeddata = () => resolve();
        });
      });

      Promise.all(videoElements).then(() => setIsLoading(false));
    };

    if (currentEpisode) {
      preloadPanelVideos();
    }
  }, [currentEpisode]);

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
          <img className="episode-nav-button" onClick={GoToFirstEpisode} src={firstButtonImage} alt="" />
          <img className="episode-nav-button" onClick={() => EpisodeDeltaChange(-1)} src={prevEpisodeImage} alt="" />
          <img className="episode-nav-button" onClick={() => navigate('/')} src={homeImage} alt="" />
          <img className="episode-nav-button" onClick={() => EpisodeDeltaChange(1)} src={nextEpisodeImage} alt="" />
          <img className="episode-nav-button" onClick={GoToLastEpisode} src={lastButtonImage} alt="" />
        </div>
      </div>
    );
  };

  const isPremium = currentEpisode ? currentEpisode.premium : false;

  const DisplayEpisode = () => {
    return (
      <div className="episode-container center-home">
        {currentEpisode.episode_panels.map((src, index) => (
          <video
            key={`${currentEpisode.id}-${index}`}
            className="episodeVideo"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
    );
  };

  return (
    <div>
      {isLoading && <PreLoader1 />}
      {!isLoading && <DisplayEpisode />}
      <Routes>
        {episodesData.map(episode => (
          <Route
            key={episode.id}
            path={`/episodes/${episode.id}`}
            element={<EpisodesPage episode={episode} />}
          />
        ))}
      </Routes>
      {isPremium && !isLoading && <LockComponent />}
      {isPremium && <Computer />}
      <EpisodeNavOverlay />
    </div>
  );
};

export default EpisodesPage;
