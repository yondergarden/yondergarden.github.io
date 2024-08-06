import React, { useState, useEffect } from 'react';
import './Lock.css';
import assetUrls from '../config/assetUrls';


const baseUrl = 'https://yondergarden.s3.us-east-2.amazonaws.com/wizardframes/';
const versionSuffix = '.png';
const frameCount = 120;
const bannerBaseUrl = 'https://yondergarden.s3.us-east-2.amazonaws.com/premiumbanner/';
const bannerCount = 16;

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

const LockComponent = ({ onReady }) => {

  useEffect(() => {
    // Call onReady after a short delay to ensure the component is fully rendered
    const timer = setTimeout(() => {
      onReady();
    }, 250);

    return () => clearTimeout(timer);
  }, [onReady]);

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
  const [wizardImages, setWizardImages] = useState([]);
  const [bannerImages, setBannerImages] = useState([]);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [lockImages, setLockImages] = useState([]);



  useEffect(() => {
    // Load wizard images
    Promise.all(assetUrls.wizardImages.map(url => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });
    })).then(setWizardImages);

    // Load banner images
    Promise.all(assetUrls.premiumBannerImages.map(url => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });
    })).then(setBannerImages);
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
      setHoveredButton(num);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouch) {
      setHoveredButton(0);
    }
  };

  const handleMouseClick = (num) => {
    if (!isTouch) {
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
    }, 150);

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

  useEffect(() => {
    // Preload lock images
    const lockImageSources = [
      assetUrls.lockImage,
      assetUrls.lockImage0,
      assetUrls.lockImage1,
      assetUrls.lockImage2,
      assetUrls.lockImage3
    ];

    Promise.all(lockImageSources.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });
    })).then(setLockImages);
  }, []);

  return (
    <>
      {showLock && (
        <>
          <div className="lock-component">
            {lockImages.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={`Lock ${index}`}
                className={`lock-image ${hoveredButton === index ? 'visible' : 'hidden'}`}
              />
            ))}
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
              backgroundImage: `url(${wizardImages[currentFrame]?.src})`,
            }}
          />
        </div>
      )}
      <div>
        <img
          className="premium-banner"
          src={bannerImages[currentBanner]?.src}
        />
      </div>
    </>
  );
};

export default LockComponent;
