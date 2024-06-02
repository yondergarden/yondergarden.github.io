import React, { useState, useEffect } from 'react';
import './Background.css';


const Background = (props) => {
    console.log(props)
    let yonderFrameImage = "https://cdn.glitch.global/4a3253fe-3104-44d3-8a31-8f43e023369d/yonderGardenFrameFg.png?v=1702515498646"
    let titleImage = "https://i.imgur.com/11iaWFH.png"

    let backgroundImage = "https://cdn.glitch.global/4a3253fe-3104-44d3-8a31-8f43e023369d/circles.gif?v=1702433383009"
    let backgroundVideo = "https://cdn.glitch.global/7090e318-2f18-421d-a082-1848387275b2/painTreeTile.mp4?v=1713402112096"
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
            <div className={props.premiumOpen ? 'bind-bg-premium' : 'bind-bg'}>
              {/*{isPortrait ? (
                <>
                  <video id="bg1" src={backgroundVideo} type="video/mp4" autoPlay loop muted playsInline />
                  <video id="bg2" src={backgroundVideo} type="video/mp4" autoPlay loop muted playsInline />
                  <video id="bg3" src={backgroundVideo} type="video/mp4" autoPlay loop muted playsInline />
                  <video id="bg4" src={backgroundVideo} type="video/mp4" autoPlay loop muted playsInline />
                  <video id="bg5" src={backgroundVideo} type="video/mp4" autoPlay loop muted playsInline />
                  <video id="bg6" src={backgroundVideo} type="video/mp4" autoPlay loop muted playsInline />
                  <video id="bg7" src={backgroundVideo} type="video/mp4" autoPlay loop muted playsInline />
                  <video id="bg8" src={backgroundVideo} type="video/mp4" autoPlay loop muted playsInline />
                  <video id="bg9" src={backgroundVideo} type="video/mp4" autoPlay loop muted playsInline />
                  <video id="bg10" src={backgroundVideo} type="video/mp4" autoPlay loop muted playsInline />
                  <video id="bg11" src={backgroundVideo} type="video/mp4" autoPlay loop muted playsInline />
                  <video id="bg12" src={backgroundVideo} type="video/mp4" autoPlay loop muted playsInline />
                  <video id="bg13" src={backgroundVideo} type="video/mp4" autoPlay loop muted playsInline />
                  <video id="bg14" src={backgroundVideo} type="video/mp4" autoPlay loop muted playsInline />
                  <video id="bg15" src={backgroundVideo} type="video/mp4" autoPlay loop muted playsInline />
                  <video id="bg16" src={backgroundVideo} type="video/mp4" autoPlay loop muted playsInline />
                </>
              ) : (
                <>
                  <video className="bg-align" src={backgroundVideo} type="video/mp4" autoPlay loop muted playsInline />
                  <video className="bg-align" src={backgroundVideo} type="video/mp4" autoPlay loop muted playsInline />
                  <video className="bg-align" src={backgroundVideo} type="video/mp4" autoPlay loop muted playsInline />
                  <video className="bg-align" src={backgroundVideo} type="video/mp4" autoPlay loop muted playsInline />
                  <video className="bg-align" src={backgroundVideo} type="video/mp4" autoPlay loop muted playsInline />
                  <video className="bg-align" src={backgroundVideo} type="video/mp4" autoPlay loop muted playsInline />
                  <video className="bg-align" src={backgroundVideo} type="video/mp4" autoPlay loop muted playsInline />
                </>
              )} */}

            </div>
            <div className={props.premiumOpen ? 'bind-grass-bg-premium' : 'bind-grass-bg'}>
              {/* {isPortrait ? (
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
              )} */}
            </div>
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
