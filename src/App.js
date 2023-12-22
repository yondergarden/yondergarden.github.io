
// Filename - App.js

import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Episodes from "./pages/episodes.js"


function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/episodes" element={<Episodes/>} />
            </Routes>
        </Router>
    );
}

export default App;
