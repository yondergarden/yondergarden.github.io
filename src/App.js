// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import EpisodesPage from "./routers/EpisodesPage";

const episodesData = require('./episodes.json');

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {episodesData.map(episode => (
          <Route
            key={episode.id}
            path={`/episodes/${episode.id}`}
            element={<EpisodesPage episode={episode}/>}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
