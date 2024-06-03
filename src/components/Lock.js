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

    // Initial call to set the height
    setVhProperty();

    // Update the value on resize
    window.addEventListener('resize', setVhProperty);

    return () => {
      window.removeEventListener('resize', setVhProperty);
    };
  }, []); // Empty dependency array means this effect runs only once, on component mount


  const [showLock, setShowLock] = useState(true); // Initially true to show the lock components
  const [lockNumber, setLockNumber] = useState(0);
  const [hoveredButton, setHoveredButton] = useState(0); // Initialize with 0
  const [concatenatedString, setConcatenatedString] = useState("");
  const [numValues, setNumValues] = useState(0); // Initialize the number of values
  const monthlyPasscode = "0123"; // Define monthly passcode
  const [isTouch, setIsTouch] = useState(false); // Flag to track touch events
  const [showWizard, setShowWizard] = useState(false);
  const [images, setImages] = useState([]);
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const loadedImages = await loadAllImages();
        setImages(loadedImages);
        setShowWizard(true); // Show the wizard container once images are loaded
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, []);

  const animateSprite = useSpring({
    loop: false,
    from: { backgroundPosition: '0px' },
    to: { backgroundPosition: `-${currentFrame * 128}px` }, // Assuming each frame has a width of 128 pixels
    config: { duration: 1000 }, // Adjust animation speed as needed
    onRest: () => {
      // Reset animation once it completes
      if (currentFrame < frameCount - 1) {
        setCurrentFrame(currentFrame + 1);
      } else {
        setCurrentFrame(0);
      }
    },
  });


  const invertPageColors = () => {
    document.body.classList.add("invert-colors"); // Apply invert colors class to body
    document.body.classList.add("brightness-effect"); // Apply brightness effect class to body

    const lockImage = document.querySelector('.lock-image');
    lockImage.classList.add('brighten-lock'); // Apply brightness effect class to LockImage

  };

  const resetLockNumber = () => {
    setLockNumber(0); // Reset lock number to 0
    setTimeout(() => {
      setLockNumber(hoveredButton); // Revert to hovered button's index after a short delay
    }, 100); // Adjust delay as needed
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
        setConcatenatedString(concatenatedString + (num-1).toString());
      }
    }
  };

  const handleMouseUp = () => {
    if (!isTouch) {
      if (concatenatedString.length === 4) {
        if (concatenatedString === monthlyPasscode) {
          setTimeout(() => {
            invertPageColors();
          }, 2000); // Delay invertPageColors by 2 seconds
          setShowWizard(true);
          setConcatenatedString(":)");
          setTimeout(() => setShowLock(false), 4000); // Hide lock after 4 seconds
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
            lockImage.classList.remove('brighten-lock'); // Remove brightness effect class from LockImage
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
    setIsTouch(true); // Set touch flag to true
    setLockNumber(num); // Set lock number to the touched button's index
    setTimeout(() => {
      setLockNumber(0); // Revert to 0th index after a short delay
    }, 100); // Adjust delay as needed

    if (concatenatedString !== ":(" && concatenatedString !== ":)") {
      setConcatenatedString(concatenatedString + (num-1).toString());
    }
  };

  const handleTouchEnd = () => {
    setIsTouch(false); // Reset touch flag to false
    if (concatenatedString.length === 4) {
      if (concatenatedString === monthlyPasscode) {
        setTimeout(() => {
          invertPageColors();
        }, 2000); // Delay invertPageColors by 2 seconds
        setShowWizard(true);
        setConcatenatedString(":)");
        setTimeout(() => setShowLock(false), 4000); // Hide lock components after 6 seconds
      } else {
        setConcatenatedString(":(");
      }
      setTimeout(() => {
        setConcatenatedString("");
      }, 2000); // Reset concatenated string after 2 seconds
      setTimeout(() => {
        document.body.classList.remove("invert-colors");
        document.body.classList.remove("brightness-effect");
        const lockImage = document.querySelector('.lock-image');
        if (lockImage) {
          lockImage.classList.remove('brighten-lock'); // Remove brightness effect class from LockImage
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
                onTouchStart={(e) => { e.preventDefault(); handleTouchStart(num); }} // Handle touch start (for mobile)
                onTouchEnd={(e) => { e.preventDefault(); handleTouchEnd(); }} // Handle touch end (for mobile)
                onMouseEnter={() => handleMouseEnter(num)}
                onMouseLeave={handleMouseLeave}
                onMouseDown={() => handleMouseClick(num)} // Handle mouse click
                onMouseUp={handleMouseUp} // Handle mouse up
              />
            ))}
          </div>
        </>
      )}
      <div className="lockCombo">{concatenatedString}</div>
      {showWizard && (
        <div className="wizard-container">
          <animated.div
            className="wizard-sprite" // Adjust class name based on your CSS
            style={{
              backgroundImage: `url(${images[currentFrame]?.src})`,
              width: '128px', // Assuming each frame has a width of 128 pixels
              height: '128px', // Assuming each frame has a height of 128 pixels
              ...animateSprite,
            }}
          />
        </div>
      )}
    </>
  );
};

export default LockComponent;
