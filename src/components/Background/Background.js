import React, { useState, useEffect } from 'react';
import './Background.css';


const Background = () => {
    let yonderFrameImage = "https://i.imgur.com/9imLhpu.png"
    let titleImage = "https://i.imgur.com/11iaWFH.png"

    // TODO: get from json
    let backgroundImage = "https://homescreenbg.s3.us-east-2.amazonaws.com/homeScreenBg.mp4"
    let backgroundImageMobile = "https://homescreenbg.s3.us-east-2.amazonaws.com/homeScreenBgMobile.mp4";
    let yonderGrassImage = "https://cdn.glitch.global/4a3253fe-3104-44d3-8a31-8f43e023369d/grassLandscape.png?v=1702081026940"

    const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setIsPortrait(window.innerHeight > window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const DisplayBackground = () => {
        return (
          <div>
              <video className={`home-bg-video ${isPortrait ? 'hidden' : ''}`} autoPlay muted loop playsInline>
                  <source src={backgroundImage} type="video/mp4"/>
                  Your browser does not support the video tag.
              </video>
              <video className={`home-bg-video ${isPortrait ? '' : 'hidden'}`} autoPlay muted loop playsInline>
                  <source src={backgroundImageMobile} type="video/mp4"/>
                  Your browser does not support the video tag.
              </video>
          </div>
        );
      }


    return (
      <div>
        <DisplayBackground/>
      </div>
    );
}

export default Background;
