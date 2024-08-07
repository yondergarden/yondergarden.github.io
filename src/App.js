import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home.js";
import EpisodesPage from "./routers/EpisodesPage";
import episodesData from './episodes.json';
import Background from "./components/Background/Background"
import PreLoader1 from "./components/PreLoader1";
import assetUrls from './config/assetUrls';
import { preloadImages, preloadVideos } from './utils/preloadAssets';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imageUrls = [
      assetUrls.frameImage,
      assetUrls.titleImage,
      assetUrls.yonderGrassImage,
      assetUrls.episodesMenuImage,
      assetUrls.subscribeMenuImage,
      assetUrls.aboutMenuImage,
      assetUrls.premiumMenuImage,
      assetUrls.keyComputerImage,
      assetUrls.lockImage,
      assetUrls.lockImage0,
      assetUrls.lockImage1,
      assetUrls.lockImage2,
      assetUrls.lockImage3,
      ...assetUrls.wizardImages,
      ...assetUrls.premiumBannerImages
    ];

    const episodeThumbnails = episodesData.map(episode => episode.thumbnail);

    const videoUrls = [
      assetUrls.backgroundVideo,
      ...episodeThumbnails
    ];

    Promise.all([preloadImages(imageUrls), preloadVideos(videoUrls)])
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      document.body.style.height = window.innerHeight + 'px';
    };

    // Initial call to set the height
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs only once, on component mount

  return (
    // isLoading ? (
    //   <PreLoader1 />
    // ) : (
      <>
        <Background />
        <Routes>
          <Route path="/" element={<Home />} />
          {episodesData.map(episode => (
            <Route
              key={episode.id}
              path={`/episodes/${episode.id}/*`}
              element={<EpisodesPage episode={episode} />}
            />
          ))}
        </Routes>
      </>
    // )
  );
}

export default App;
