import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home.js";
import EpisodesPage from "./routers/EpisodesPage";
import Background from "./components/Background/Background"
import PreLoader1 from "./components/PreLoader1";

const episodesData = require('./episodes.json');

function App() {
  const [loading, setLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    // Simulate loading with a timeout
    setTimeout(() => {
      setLoading(false); // Set loading to false after a number of milliseconds
    }, 0);
  }, []); // Run this effect only once after the component mounts

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
    <>
      {/* Render the PreLoader1 component if loading state is true */}
      {loading ? (
        <PreLoader1 />
      ) : (
        <>
        <Background />
        <Routes>
          <Route path="/" element={<Home />} />
          {episodesData.map(episode => (
            <Route
              key={episode.id}
              path={`/episodes/${episode.id}`}
              element={<EpisodesPage episode={episode}/>}
            />
          ))}
        </Routes>
        </>
      )}
    </>
  );
}

export default App;
