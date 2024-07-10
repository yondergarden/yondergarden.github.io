import React, { useState, useEffect } from 'react';
import './Lock.css';

const baseUrl = 'https://yondergarden.s3.us-east-2.amazonaws.com/wizardframes/';
const versionSuffix = '.png';
const frameCount = 120;
const bannerBaseUrl = 'https://yondergarden.s3.us-east-2.amazonaws.com/premiumbanner/';
const bannerCount = 37;

const spriteUrls = Array.from({ length: frameCount }, (_, index) => {
  return `${baseUrl}wizardUnlock.0.${index + 1}${versionSuffix}`;
});

const bannerUrls = Array.from({ length: bannerCount }, (_, index) => {
  return `${bannerBaseUrl}premiumBanner.0.${index + 1}${versionSuffix}`;
});

const loadImage = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
    img.src = url;
  });
};

const loadAllImages = async (urls) => {
  const images = await Promise.all(urls.map(url => loadImage(url)));
  return images;
};

const LockComponent = () => {
  useEffect(() => {
    const setVhProperty = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVhProperty();
    window.addEventListener('resize', setVhProperty);

    return () => {
      window.removeEventListener('resize', setVhProperty);
    };
  }, []);

  const [showLock, setShowLock] = useState(true);
  const [lockNumber, setLockNumber] = useState(0);
  const [hoveredButton, setHoveredButton] = useState(0);
  const [concatenatedString, setConcatenatedString] = useState("");
  const [numValues, setNumValues] = useState(0);
  const monthlyPasscode = "0123";
  const [isTouch, setIsTouch] = useState(false);
  const [showWizard, setShowWizard] = useState(false);
  const [images, setImages] = useState([]);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [bannerImages, setBannerImages] = useState([]);
  const [currentBanner, setCurrentBanner] = useState(0);


  useEffect(() => {
    const fetchImages = async () => {
      try {
        const loadedImages = await loadAllImages(spriteUrls);
        setImages(loadedImages);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchBanners = async () => {
      try {
        const loadedBanners = await loadAllImages(bannerUrls);
        setBannerImages(loadedBanners);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
    fetchBanners();
  }, []);

  useEffect(() => {
    let frameInterval;
    if (showWizard) {
      frameInterval = setInterval(() => {
        setCurrentFrame(prevFrame => {
          const newFrame = prevFrame + 1;
          if (newFrame >= frameCount - 1) {
            clearInterval(frameInterval);
            setShowWizard(false);
            return frameCount - 1; // Stay on the last frame
          }
          return newFrame;
        });
      }, 1000 / 24); // 24 frames per second
    }
    return () => clearInterval(frameInterval);
  }, [showWizard]);

  useEffect(() => {
    const bannerInterval = setInterval(() => {
      setCurrentBanner(prevBanner => (prevBanner + 1) % bannerCount);
    }, 1000/24);
    return () => clearInterval(bannerInterval);
  }, []);

  const invertPageColors = () => {
    document.body.classList.add("invert-colors");
    document.body.classList.add("brightness-effect");

    const lockImage = document.querySelector('.lock-image');
    if (lockImage) {
      lockImage.classList.add('brighten-lock');
    }
  };

  const resetLockNumber = () => {
    setLockNumber(0);
    setTimeout(() => {
      setLockNumber(hoveredButton);
    }, 100);
  };

  const handleMouseEnter = (num) => {
    if (!isTouch) {
      setLockNumber(num);
      setHoveredButton(num);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouch) {
      setLockNumber(0);
    }
  };

  const handleMouseClick = (num) => {
    if (!isTouch) {
      setLockNumber(0);
      setTimeout(() => {
        setLockNumber(hoveredButton);
      }, 100);

      if (concatenatedString !== ":(" && concatenatedString !== ":)") {
        setConcatenatedString(concatenatedString + (num - 1).toString());
      }
    }
  };

  const handleMouseUp = () => {
    if (!isTouch) {
      if (concatenatedString.length === 4) {
        if (concatenatedString === monthlyPasscode) {
          setTimeout(() => {
            invertPageColors();
          }, 2000);
          setShowWizard(true);
          setConcatenatedString(":)");
          setTimeout(() => setShowLock(false), 4000);
        } else {
          setConcatenatedString(":(");
        }
        setTimeout(() => {
          setConcatenatedString("");
        }, 2000);
        setTimeout(() => {
          document.body.classList.remove("invert-colors");
          document.body.classList.remove("brightness-effect");
          const lockImage = document.querySelector('.lock-image');
          if (lockImage) {
            lockImage.classList.remove('brighten-lock');
          }
        }, 4000);
        setNumValues(0);
      } else {
        setNumValues(numValues + 1);
      }
    }
  };

  const handleTouchStart = (num) => {
    setIsTouch(true);
    setLockNumber(num);
    setTimeout(() => {
      setLockNumber(0);
    }, 100);

    if (concatenatedString !== ":(" && concatenatedString !== ":)") {
      setConcatenatedString(concatenatedString + (num - 1).toString());
    }
  };

  const handleTouchEnd = () => {
    setIsTouch(false);
    if (concatenatedString.length === 4) {
      if (concatenatedString === monthlyPasscode) {
        setTimeout(() => {
          invertPageColors();
        }, 2000);
        setShowWizard(true);
        setConcatenatedString(":)");
        setTimeout(() => setShowLock(false), 4000);
      } else {
        setConcatenatedString(":(");
      }
      setTimeout(() => {
        setConcatenatedString("");
      }, 2000);
      setTimeout(() => {
        document.body.classList.remove("invert-colors");
        document.body.classList.remove("brightness-effect");
        const lockImage = document.querySelector('.lock-image');
        if (lockImage) {
          lockImage.classList.remove('brighten-lock');
        }
      }, 4000);
    } else {
      setNumValues(numValues + 1);
    }
  };

  const imageSources = [
    "https://cdn.glitch.global/7090e318-2f18-421d-a082-1848387275b2/lock.png?v=1715190939505",
    "https://cdn.glitch.global/7090e318-2f18-421d-a082-1848387275b2/lock0.png?v=1715190938644",
    "https://cdn.glitch.global/7090e318-2f18-421d-a082-1848387275b2/lock1.png?v=1715190937664",
    "https://cdn.glitch.global/7090e318-2f18-421d-a082-1848387275b2/lock2.png?v=1715190936872",
    "https://cdn.glitch.global/7090e318-2f18-421d-a082-1848387275b2/lock3.png?v=1715190940266"
  ];

  return (
    <>
      {showLock && (
        <>
          <div className="lock-component">
            <img
              src={imageSources[lockNumber]}
              alt="Lock"
              className="lock-image"
            />
          </div>
          <div className="invisible-button-container">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="invisible-button"
                onTouchStart={(e) => { e.preventDefault(); handleTouchStart(num); }}
                onTouchEnd={(e) => { e.preventDefault(); handleTouchEnd(); }}
                onMouseEnter={() => handleMouseEnter(num)}
                onMouseLeave={handleMouseLeave}
                onMouseDown={() => handleMouseClick(num)}
                onMouseUp={handleMouseUp}
              />
            ))}
          </div>
        </>
      )}
      <div className="lockCombo">{concatenatedString}</div>
      {showWizard && (
        <div className="wizard-container">
          <div
            className="wizard-sprite"
            style={{
              backgroundImage: `url(${images[currentFrame]?.src})`,
            }}
          />
        </div>
      )}
      <div className="premium-banner">
        <img
          src={bannerImages[currentBanner]?.src}
          alt="Premium Banner"
        />
      </div>
    </>
  );
};

export default LockComponent;
