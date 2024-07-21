import React, { useEffect, useState } from 'react';
import './Computer.css';
import assetUrls from '../config/assetUrls';


const Computer = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(hasTouchScreen);
  }, []);

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
      <a 
        href="https://www.patreon.com/YonderGarden"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          if (isTouchDevice) {
            e.preventDefault();
            setTimeout(() => {
              window.open("https://www.patreon.com/YonderGarden", "_blank", "noopener,noreferrer");
            }, 250);
          }
        }}
      >
        <img
          src={assetUrls.keyComputerImage}
          alt="Computer"
          className="computer-image"
        />
      </a>
    </div>
  );
};

export default Computer;
