import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import '../App.css';
import Background from "../components/Background"


const Home = () => {


  const [aboutOpen, setAboutOpen] = useState(false);

  let episodesMenuImage = "https://i.imgur.com/tHMXkUr.png"
  let premiumMenuImage = "https://i.imgur.com/UHet8Vq.png"
  let merchMenuImage = "https://i.imgur.com/EEKI1Td.png"
  let aboutMenuImage = "https://i.imgur.com/ZjdrIPQ.png"


  let navigate = useNavigate();

  const RouteChange = (pageUrl) =>{
    navigate(pageUrl);
  }

  useEffect(() => {
    console.log(aboutOpen)
  },[aboutOpen])

  const SideMenu = () => {
    //TODO: Add title, fix button
    return (
      <div className="side-menu">
        <div className="side-menu-button"></div>
        <div className="side-menu-button"></div>
        <div className="side-menu-button"></div>
        <div className="side-menu-button"></div>
        <div className="side-menu-button"></div>
      </div>
    );
  }

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

  // const DisplayBackground = () => {

  //   return (
  //     <div>
  //       <img className="center-home layer-51" src={titleImage} alt="" />
  //       <div className='bind-bg'>
  //         <img className="bg-align" src={backgroundImage} alt="" />
  //         <img className="bg-align" src={backgroundImage} alt="" />
  //         <img className="bg-align" src={backgroundImage} alt="" />
  //         <img className="bg-align" src={backgroundImage} alt="" />
  //         <img className="bg-align" src={backgroundImage} alt="" />
  //         <img className="bg-align" src={backgroundImage} alt="" />
  //         <img className="bg-align" src={backgroundImage} alt="" />
  //       </div>
  //       <div className='bind-bg'>
  //         <img className="bg-align" src={yonderGrassImage} alt="" />
  //         <img className="bg-align" src={yonderGrassImage} alt="" />
  //         <img className="bg-align" src={yonderGrassImage} alt="" /> 
  //         <img className="bg-align" src={yonderGrassImage} alt="" />
  //         <img className="bg-align" src={yonderGrassImage} alt="" /> 
  //         <img className="bg-align" src={yonderGrassImage} alt="" />
  //         <img className="bg-align" src={yonderGrassImage} alt="" /> 
  //       </div>

  //       <img className="center-home layer-50 " src={yonderFrameImage} alt="" />
  //     </div>
  //     );
  // }

  const DisplayMenu = () => {

    return (
      <div className="menu-container center-home">
        <img id = "episodes-button" className="image-button" onClick={() => { RouteChange("episodes"); console.log("episode onClick");}} src={episodesMenuImage} alt="" />
        <img id = "premium-button" className="image-button" src={premiumMenuImage} alt="" />
        <img id = "merch-button" className="image-button spin-hover" src={merchMenuImage} alt="" />
        <img id = "about-button" className="image-button" onClick={() => {setAboutOpen(true); console.log(aboutOpen)}} src={aboutMenuImage} alt="" />
      </div>
    );
  }

  return (
      <header>
        <body >
        <SideMenu />
          <div>
            <Background />
            {aboutOpen ? <DisplayInfo/> : <DisplayMenu />}
          </div>
        </body>
      </header>

  );
}

export default Home;
