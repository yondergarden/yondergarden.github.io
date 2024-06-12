import React, { useState, useEffect } from 'react';
import './Background.css';


const Background = (props) => {
    console.log(props)
    let yonderFrameImage = "https://i.imgur.com/9imLhpu.png"
    let titleImage = "https://i.imgur.com/11iaWFH.png"

    let backgroundImage = "https://homescreenbg.s3.us-east-2.amazonaws.com/homeScreenBg.mp4"
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
        console.log(props)
        return (
          <div>
            <video className="home-bg-video" autoPlay muted loop>
                <source src={backgroundImage} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            {/*<img className={props.premiumOpen ? "center-home-premium layer-51" : "center-home layer-51"} src={titleImage} alt="" />
            <div className={props.premiumOpen ? 'bind-bg-premium' : 'bind-bg'}>
              {isPortrait ? (
                <>
                  <img id="bg1" src={backgroundImage} alt="" />
                  <img id="bg2" src={backgroundImage} alt="" />
                  <img id="bg3" src={backgroundImage} alt="" />
                  <img id="bg4" src={backgroundImage} alt="" />
                  <img id="bg5" src={backgroundImage} alt="" />
                  <img id="bg6" src={backgroundImage} alt="" />
                  <img id="bg7" src={backgroundImage} alt="" />
                  <img id="bg8" src={backgroundImage} alt="" />
                  <img id="bg9" src={backgroundImage} alt="" />
                  <img id="bg10" src={backgroundImage} alt="" />
                  <img id="bg11" src={backgroundImage} alt="" />
                  <img id="bg12" src={backgroundImage} alt="" />
                  <img id="bg13" src={backgroundImage} alt="" />
                  <img id="bg14" src={backgroundImage} alt="" />
                  <img id="bg15" src={backgroundImage} alt="" />
                  <img id="bg16" src={backgroundImage} alt="" />
                </>
              ) : (
                <>
                  <img className="bg-align" src={backgroundImage} alt="" />
                  <img className="bg-align" src={backgroundImage} alt="" />
                  <img className="bg-align" src={backgroundImage} alt="" />
                  <img className="bg-align" src={backgroundImage} alt="" />
                  <img className="bg-align" src={backgroundImage} alt="" />
                  <img className="bg-align" src={backgroundImage} alt="" />
                  <img className="bg-align" src={backgroundImage} alt="" />
                </>
              )}
            </div>
            <div className={props.premiumOpen ? 'bind-grass-bg-premium' : 'bind-grass-bg'}>
              {isPortrait ? (
                <>
                  <img id="grass1" src={yonderGrassImage} alt="" />
                  <img id="grass2" src={yonderGrassImage} alt="" />
                  <img id="grass3" src={yonderGrassImage} alt="" />
                  <img id="grass4" src={yonderGrassImage} alt="" />
                  <img id="grass5" src={yonderGrassImage} alt="" />
                  <img id="grass6" src={yonderGrassImage} alt="" />
                  <img id="grass7" src={yonderGrassImage} alt="" />
                  <img id="grass8" src={yonderGrassImage} alt="" />
                  <img id="grass9" src={yonderGrassImage} alt="" />
                  <img id="grass10" src={yonderGrassImage} alt="" />
                  <img id="grass11" src={yonderGrassImage} alt="" />
                  <img id="grass12" src={yonderGrassImage} alt="" />
                  <img id="grass13" src={yonderGrassImage} alt="" />
                  <img id="grass14" src={yonderGrassImage} alt="" />
                  <img id="grass15" src={yonderGrassImage} alt="" />
                  <img id="grass16" src={yonderGrassImage} alt="" />
                </>
              ) : (
                <>
                  <img className="bg-align" src={yonderGrassImage} alt="" />
                  <img className="bg-align" src={yonderGrassImage} alt="" />
                  <img className="bg-align" src={yonderGrassImage} alt="" />
                  <img className="bg-align" src={yonderGrassImage} alt="" />
                  <img className="bg-align" src={yonderGrassImage} alt="" />
                  <img className="bg-align" src={yonderGrassImage} alt="" />
                  <img className="bg-align" src={yonderGrassImage} alt="" />
                </>
              )}
            </div>
            <img className={props.premiumOpen ? "center-home-premium layer-51" : "center-home layer-51"} src={yonderFrameImage} alt="" /> */}
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
