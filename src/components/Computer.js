import React, { useEffect } from 'react';
import './Computer.css'; // Import the CSS file

const Computer = () => {
  useEffect(() => {
    const setVhProperty = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Initial call to set the height
    setVhProperty();

    // Update the value on resize
    window.addEventListener('resize', setVhProperty);

    return () => {
      window.removeEventListener('resize', setVhProperty);
    };
  }, []); // Empty dependency array means this effect runs only once, on component mount

  return (
    <div className="computer-container">
      <a href="https://www.patreon.com/YonderGarden" target="_blank" rel="noopener noreferrer">
        <img
          src="https://cdn.glitch.global/7090e318-2f18-421d-a082-1848387275b2/computer.png?v=1716659074831" // Replace with your image URL
          alt="Computer"
          className="computer-image"
        />
      </a>
    </div>
  );
};

export default Computer;
