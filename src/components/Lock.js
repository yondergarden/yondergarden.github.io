import React, { useState, useEffect, useRef } from 'react';
import './Lock.css';
import { useSpring, animated } from 'react-spring';

const baseUrl = 'https://yondergardenwizard.s3.amazonaws.com/';
const versionSuffix = '.png';
const frameCount = 120;

const spriteUrls = Array.from({ length: frameCount }, (_, index) => {
  return `${baseUrl}wizardUnlock.0.${index + 1}${versionSuffix}`;
});

const loadImage = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
    img.src = url;
  });
};

const loadAllImages = async () => {
  const images = await Promise.all(spriteUrls.map(url => loadImage(url)));
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

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const loadedImages = await loadAllImages();
        setImages(loadedImages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    let frameInterval;
    if (showWizard) {
      frameInterval = setInterval(() => {
        setCurrentFrame(prevFrame => (prevFrame + 1) % frameCount);
      }, 1000 / 30); // 12 frames per second
    }
    return () => clearInterval(frameInterval);
  }, [showWizard]);

  const animateSprite = useSpring({
    from: { frame: 0 },
    frame: currentFrame,
    reset: true,
    reverse: currentFrame === frameCount - 1,
    config: { duration: 1000 / 12 }, // 12 frames per second
    onRest: () => {
      setCurrentFrame(prevFrame => (prevFrame + 1) % frameCount);
    },
  });

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
          setShowWizard(false);
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
        setShowWizard(false);
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
          <animated.div
            className="wizard-sprite"
            style={{
              backgroundImage: `url(${images[currentFrame]?.src})`,
            }}
          />
        </div>
      )}
    </>
  );
};

export default LockComponent;
