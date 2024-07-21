import React, { useState, useEffect, useRef } from 'react';
import './Background.css';
import assetUrls from '../../config/assetUrls';

function usePreventScroll() {
  useEffect(() => {
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
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);
  const videoRefs = useRef([]);

  useEffect(() => {
    const setVH = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    window.addEventListener('resize', setVH);

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

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  usePreventScroll();

  useEffect(() => {
    const syncVideos = () => {
      videoRefs.current.forEach((video) => {
        video.currentTime = 0;
        video.play();
      });
    };

    const handleTimeUpdate = () => {
      const firstVideo = videoRefs.current[0];
      if (firstVideo && firstVideo.currentTime >= firstVideo.duration - 0.1) {
        syncVideos();
      }
    };

    Promise.all(videoRefs.current.map(video => new Promise((resolve) => {
      video.oncanplay = resolve;
    }))).then(() => {
      syncVideos();
      videoRefs.current.forEach(video => {
        video.addEventListener('timeupdate', handleTimeUpdate);
      });
    });

    return () => {
      videoRefs.current.forEach(video => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
      });
    };
  }, []);

  const DisplayBackground = () => {
    return (
      <div>
        {[...Array(7)].map((_, i) => (
          <video
            key={i}
            ref={(el) => (videoRefs.current[i] = el)}
            className="home-bg-video"
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
                    transform: `translate(-50%, calc(-50% - ${i} * (calc(var(--vh, 1vh) * 10) - 10vw)))`,
                  }
                : {
                    zIndex: -20 - i,
                    position: 'absolute',
                    top: '50%',
                    transform: `translate(calc(calc(var(--vh, 1vh) * -350) + ${i} * calc(var(--vh, 1vh) * 100)), -50%)`,
                  }
            }
          >
            <source src={assetUrls.backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
        <img className="home-frame" src={assetUrls.yonderGrassImage} />
        {[...Array(7)].map((_, i) => (
          <img
            key={i}
            className="home-frame"
            src={assetUrls.yonderGrassImage}
            style={
              isPortrait
                ? {
                    zIndex: -10 + i,
                    position: 'absolute',
                    top: '100%',
                    transform: `translate(-50%, calc(-100% - ${i} * (calc(var(--vh, 1vh) * 10) - 10vw)))`,
                  }
                : {
                    zIndex: -10 - i,
                    position: 'absolute',
                    top: '50%',
                    transform: `translate(calc(-350vh + ${i} * calc(var(--vh, 1vh) * 100)), -50%)`,
                  }
            }
          />
        ))}
        <img className="home-frame" id="frame-frame" src={assetUrls.frameImage} />
        <img className="yonder-garden-title" src={assetUrls.titleImage} />
      </div>
    );
  };

  return (
    <div>
      <DisplayBackground />
    </div>
  );
};

export default Background;
