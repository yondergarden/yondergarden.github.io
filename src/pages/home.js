import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from 'react';

import '../App.css';
import Background from "../components/Background"


const Home = () => {

  const [aboutOpen, setAboutOpen] = useState(false);
  const [episodesOpen, setEpisodesOpen] = useState(false);

  let episodesMenuImage = "https://i.imgur.com/tHMXkUr.png"
  let merchMenuImage = "https://i.imgur.com/EEKI1Td.png"
  let aboutMenuImage = "https://i.imgur.com/ZjdrIPQ.png"
  let premiumMenuImage = "https://i.imgur.com/UHet8Vq.png"
  let titleImage = "https://i.imgur.com/11iaWFH.png"
  let backgroundImage = "https://i.imgur.com/jUZxv1T.gif"
  let yonderGrassImage = "https://cdn.glitch.global/4a3253fe-3104-44d3-8a31-8f43e023369d/grassLandscape.png?v=1702081026940"
  let yonderFrameImage = "https://i.imgur.com/Sz5hzol.png"

  // Function to preload images
  function preloadImage(url) {
    var img = new Image();
    img.src = url;
  }

  // What does this do? behavior the same when removed
  // it preloads the hover images, otherwise there is a brief emptiness upon hover (could be another way to handle this)
  //Function to preload hover images
  function preloadImage(url) {
    var img = new Image();
    img.src = url;
  }

  // Preload the hover images
  preloadImage('https://i.imgur.com/f6gNmHR.png');
  preloadImage('https://i.imgur.com/Hj4Ehh7.png');
  preloadImage('https://i.imgur.com/M0NZyfJ.png');
  preloadImage('https://i.imgur.com/xDGevDU.png');


  let navigate = useNavigate();

  const RouteChange = (pageUrl) =>{
    navigate(pageUrl);
  }

  useEffect(() => {
    console.log(aboutOpen)
  },[aboutOpen])

  // useEffect(() => {
  //   console.log(episodesOpen)
  // },[episodesOpen])

  const DisplayInfo = () => {
    return (
      <div>
        <div className="menu-container center-home">
          <div className='info-box'>
            <button type="button" className="closeButton" onClick={() => {setAboutOpen(false); console.log(aboutOpen)}}>X</button>
            <h1 className="text-heading">Yonder Garden:</h1>
            <p> This is where the information for Yonder Garden would go... If there was any ^.^</p>
          </div>
        </div>
      </div>
    );
  };



  const DisplayEpisodes = () => {
    // Define a function to handle the close button click
    const handleCloseClick = () => {
      setEpisodesOpen(false);
      console.log(episodesOpen);
    };

    // HTML content to be embedded
    const htmlContent = `
      <html>
        <head>
          <style>
            body {
              background-color: pink;
              margin: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100vh;
            }
            .closeButton {
              position: fixed;
              top: 1vh;
              left: 1vh;
              background: #FF6666; /* Handle color */
              border: 'solid black';
              color: #5D2E8C; /* Track color */
              padding: 1vh;
            }
            .closeButton:hover {
              cursor: pointer;
              background: #FFFF00; /* Handle color on hover */
              transform: scale(1.1)
            }
            .closeButton:active {
              cursor: pointer;
              background: #CCFF66; /* Handle color on hover */
              transform: scale(1)
            }
            .cat-container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 3vh;
            }
            .cat-image {
              width: 15vh;
              height: 15vh;
              object-fit: cover;
              border: 0.5vh solid black;
            }
            .cat-image:hover {
              cursor: pointer;
              transform: rotate(3.5deg) scale(1.05);
            }
            .cat-image:active {
              cursor: pointer;
              transform: rotate(3.5deg) scale(1);
            }
            ::-webkit-scrollbar {
              width: 2vw; /* Width of the scrollbar */
            }
            ::-webkit-scrollbar-track {
              background: #5D2E8C; /* Track color */
            }
            ::-webkit-scrollbar-thumb {
              background: #FF6666; /* Handle color */
            }
            ::-webkit-scrollbar-thumb:hover {
              background: #FFFF00; /* Handle color on hover */
            }
          </style>
        </head>
        <body>
          <div class="menu-container center-home">
            <div>
              <button type="button" class="closeButton" onclick="handleCloseClick()">x</button>
              <div class="cat-container">
                <a href="https://yonder.garden">
                  <img class="cat-image" src="https://placekitten.com/100/100" alt="Cat 1" />
                </a>
                <img class="cat-image" src="https://placekitten.com/100/101" alt="Cat 2" />
                <img class="cat-image" src="https://placekitten.com/100/102" alt="Cat 3" />
                <img class="cat-image" src="https://placekitten.com/100/103" alt="Cat 4" />
                <img class="cat-image" src="https://placekitten.com/100/104" alt="Cat 5" />
                <img class="cat-image" src="https://placekitten.com/100/100" alt="Cat 1" />
                <img class="cat-image" src="https://placekitten.com/100/101" alt="Cat 2" />
                <img class="cat-image" src="https://placekitten.com/100/102" alt="Cat 3" />
                <img class="cat-image" src="https://placekitten.com/100/103" alt="Cat 4" />
                <img class="cat-image" src="https://placekitten.com/100/104" alt="Cat 5" />
                <img class="cat-image" src="https://placekitten.com/100/100" alt="Cat 1" />
                <img class="cat-image" src="https://placekitten.com/100/101" alt="Cat 2" />
                <img class="cat-image" src="https://placekitten.com/100/102" alt="Cat 3" />
                <img class="cat-image" src="https://placekitten.com/100/103" alt="Cat 4" />
                <img class="cat-image" src="https://placekitten.com/100/104" alt="Cat 5" />
                <img class="cat-image" src="https://placekitten.com/100/100" alt="Cat 1" />
                <img class="cat-image" src="https://placekitten.com/100/101" alt="Cat 2" />
                <img class="cat-image" src="https://placekitten.com/100/102" alt="Cat 3" />
                <img class="cat-image" src="https://placekitten.com/100/103" alt="Cat 4" />
                <img class="cat-image" src="https://placekitten.com/100/104" alt="Cat 5" />
                <img class="cat-image" src="https://placekitten.com/100/103" alt="Cat 4" />
                <img class="cat-image" src="https://placekitten.com/100/104" alt="Cat 5" />
                <img class="cat-image" src="https://placekitten.com/100/103" alt="Cat 4" />
                <img class="cat-image" src="https://placekitten.com/100/104" alt="Cat 5" />
                <img class="cat-image" src="https://placekitten.com/100/103" alt="Cat 4" />
                <img class="cat-image" src="https://placekitten.com/100/104" alt="Cat 5" />
                <img class="cat-image" src="https://placekitten.com/100/103" alt="Cat 4" />
                <img class="cat-image" src="https://placekitten.com/100/104" alt="Cat 5" />
                <img class="cat-image" src="https://placekitten.com/100/103" alt="Cat 4" />
                <img class="cat-image" src="https://placekitten.com/100/104" alt="Cat 5" />
                <img class="cat-image" src="https://placekitten.com/100/103" alt="Cat 4" />
                <img class="cat-image" src="https://placekitten.com/100/104" alt="Cat 5" />
                <img class="cat-image" src="https://placekitten.com/100/103" alt="Cat 4" />
                <img class="cat-image" src="https://placekitten.com/100/104" alt="Cat 5" />
              </div>
            </div>
          </div>
          <script>
            function handleCloseClick() {
              // Send a message to the parent window to request closing the iframe
              window.parent.postMessage('closeIframe', '*');
            }
          </script>
        </body>
      </html>
    `;

    useEffect(() => {
      // Define a function to handle messages from the iframe
      const handleMessage = (event) => {
        // Check if the message is to close the iframe
        if (event.data === 'closeIframe') {
          setEpisodesOpen(false);
          console.log(episodesOpen);
        }
      };

      // Add an event listener for messages
      window.addEventListener('message', handleMessage);

      // Remove the event listener when the component is unmounted
      return () => {
        window.removeEventListener('message', handleMessage);
      };
    }, [episodesOpen]);

    return (
      <div style={{ position: 'absolute', zIndex: 49, width: '100%', height: '100%', left: 0, top: 0 }}>
        {episodesOpen && (
          <iframe
            title="Episodes"
            style={{
              width: '55vh',
              height: '60vh',
              border: '.3vh solid black',
              zIndex: 5000,
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              // @media (orientation: portrait): {
              //   // Styles for mobile (adjust the max-width as needed)
              //   width: '6vw',
              //   height: '60vh',
              // },
            }}
            srcDoc={htmlContent}
          />
        )}
      </div>
    );
  };



  const DisplayBackground = () => {
    return (
      <div>
          <img className="center-home layer-2" src={titleImage} alt="" />

          {/* <img className="center-home layer-50 " src={yonderFrameImage} alt="" /> */}

        <div className='bind-bg'>
          <img className="test-bg-align" src={backgroundImage} alt="" />
          <img className="test-bg-align" src={backgroundImage} alt="" />
          <img className="test-bg-align" src={backgroundImage} alt="" />
          <img className="test-bg-align" src={backgroundImage} alt="" />
          <img className="test-bg-align" src={backgroundImage} alt="" />
          <img className="test-bg-align" src={backgroundImage} alt="" />
          <img className="test-bg-align" src={backgroundImage} alt="" />
        </div>
        <div className='bind-bg'>
          <img className="test-bg-align" src={yonderGrassImage} alt="" />
          <img className="test-bg-align" src={yonderGrassImage} alt="" />
          <img className="test-bg-align" src={yonderGrassImage} alt="" />
          <img className="test-bg-align" src={yonderGrassImage} alt="" />
          <img className="test-bg-align" src={yonderGrassImage} alt="" />
          <img className="test-bg-align" src={yonderGrassImage} alt="" />
          <img className="test-bg-align" src={yonderGrassImage} alt="" />
        </div>

          <img className="center-home layer-50 " src={yonderFrameImage} alt="" />

          {/* <img className="center-home layer-1 offset-bg-right" src={yonderGrassImage} alt="" /> */}
          {/* <img className="center-home layer-1 offset-bg-right" src={yonderGrassImage} alt="" /> */}


          <img className="center-home layer-1 " src={yonderGrassImage} alt="" />
          {/* <img className="center-home layer-1" src={backgroundImage} alt="" /> */}

          {/* <img className="center-home layer-0 offset-bg-right" src={backgroundImage} alt="" /> */}
          {/* <img className="center-home layer-1 offset-bg-right" src={yonderGrassImage} alt="" /> */}

          {/* <img className="center-home layer-0 offset-bg-left" src={backgroundImage} alt="" />
          <img className="center-home layer-1 offset-bg-left" src={yonderGrassImage} alt="" /> */}
      </div>
      );
  }

  const DisplayMenu = () => {

    return (
      <div className="menu-container center-home">
        <img id="episodes-button" className="image-button" onClick={() => {setEpisodesOpen(true); console.log(episodesOpen)}} src={episodesMenuImage} alt="" />
        <img id="premium-button" className="image-button" src={premiumMenuImage} alt="" />
        <img id="merch-button" className="image-button spin-hover" src={merchMenuImage} alt="" />
        <img id="about-button" className="image-button" onClick={() => {setAboutOpen(true); console.log(aboutOpen)}} src={aboutMenuImage} alt="" />
      </div>
    );
  }

  return (
      <header>
        <body>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/>
        <DisplayBackground />
        {(episodesOpen || aboutOpen) ? null : <DisplayMenu />}
        {episodesOpen ? <DisplayEpisodes/> : null}
        {aboutOpen ? <DisplayInfo/> : null}
        </body>
      </header>

  );
}

export default Home;
