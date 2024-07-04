import React, { useState, useEffect } from 'react';
import './Background.css';

function usePreventScroll() {
  useEffect(() => {
    // Detect if the user is on an iOS device
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (!isIOS) {
      return;
    }

    const handleTouchMove = (event) => {
      event.preventDefault();
    };

    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
}

const Background = () => {
    let titleImage = "https://yondergarden.s3.us-east-2.amazonaws.com/defaultassets/TitleDefault.png"
    let backgroundImage = "https://yondergarden.s3.us-east-2.amazonaws.com/defaultassets/BackgroundCirclesDefault.mp4"
    let frameImage = "https://yondergarden.s3.us-east-2.amazonaws.com/defaultassets/FrameDefault.png";
    let yonderGrassImage = "https://yondergarden.s3.us-east-2.amazonaws.com/defaultassets/GrassDefault.png"

    const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

    useEffect(() => {
      const setVH = () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      };

      setVH();
      window.addEventListener('resize', setVH);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', setVH);
      };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const isCurrentlyPortrait = window.innerHeight > window.innerWidth;
            setIsPortrait(isCurrentlyPortrait);
        };

        window.addEventListener('resize', handleResize);

        // Call handleResize initially to set the correct state
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    usePreventScroll();


    const DisplayBackground = () => {
        return (
          <div>
              {[...Array(7)].map((_, i) => (
                  <video
                      key={i}
                      className='home-bg-video'
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={
                          isPortrait
                          ? {
                              zIndex: -i,
                              position: 'absolute',
                              top: '50%',
                              transform: `translate(-50%, calc(-50% - ${i} * (10vh - 10vw)))`
                            }
                          : {
                              zIndex: -20 - i,
                              position: 'absolute',
                              top: '50%',
                              transform: `translate(calc(calc(var(--vh, 1vh) * -350) + ${i} * calc(var(--vh, 1vh) * 100)), -50%)`
                            }
                      }
                  >
                      <source src={backgroundImage} type="video/mp4"/>
                      Your browser does not support the video tag.
                  </video>
              ))}
              <img className='home-frame' src={yonderGrassImage}/>
              {[...Array(7)].map((_, i) => (
                  <img
                      key={i}
                      className='home-frame'
                      src={yonderGrassImage}
                      style={
                        isPortrait
                        ? {
                          zIndex: -10 + i,
                          position: 'absolute',
                          top: '100%',
                          transform: `translate(-50%, calc(-100% - ${i} * (calc(var(--vh, 1vh) * 10) - 10vw)))`
                        }
                        : {
                          zIndex: -10 - i,
                          position: 'absolute',
                          top: '50%',
                          transform: `translate(calc(-350vh + ${i} * calc(var(--vh, 1vh) * 100)), -50%)`
                        }
                      }
                  />
              ))}
              <img className='home-frame' src={frameImage}/>
              <img className='home-frame' src={titleImage}/>
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
