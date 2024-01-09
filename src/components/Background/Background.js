
import './Background.css';


const Background = (props) => {
    console.log(props)
    let yonderFrameImage = "https://cdn.glitch.global/4a3253fe-3104-44d3-8a31-8f43e023369d/yonderGardenFrameFg.png?v=1702515498646"
    let titleImage = "https://i.imgur.com/11iaWFH.png"

    let backgroundImage = "https://cdn.glitch.global/4a3253fe-3104-44d3-8a31-8f43e023369d/circles.gif?v=1702433383009"
    let yonderGrassImage = "https://cdn.glitch.global/4a3253fe-3104-44d3-8a31-8f43e023369d/grassLandscape.png?v=1702081026940"

    const DisplayBackground = () => {
        console.log(props)
        return (

          <div>
            <img className={props.premiumOpen ? "center-home-premium layer-51" : "center-home layer-51"} src={titleImage} alt="" />
            <div className={props.premiumOpen ? 'bind-bg-premium' : 'bind-bg'}>
              <img className="bg-align" src={backgroundImage} alt="" />
              <img className="bg-align" src={backgroundImage} alt="" />
              <img className="bg-align" src={backgroundImage} alt="" />
              <img className="bg-align" src={backgroundImage} alt="" />
              <img className="bg-align" src={backgroundImage} alt="" />
              <img className="bg-align" src={backgroundImage} alt="" />
              <img className="bg-align" src={backgroundImage} alt="" />
            </div>
            <div className={props.premiumOpen ? 'bind-bg-premium' : 'bind-bg'}>
              <img className="bg-align" src={yonderGrassImage} alt="" />
              <img className="bg-align" src={yonderGrassImage} alt="" />
              <img className="bg-align" src={yonderGrassImage} alt="" />
              <img className="bg-align" src={yonderGrassImage} alt="" />
              <img className="bg-align" src={yonderGrassImage} alt="" />
              <img className="bg-align" src={yonderGrassImage} alt="" />
              <img className="bg-align" src={yonderGrassImage} alt="" />
            </div>

            <img className={props.premiumOpen ? "center-home-premium layer-51" : "center-home layer-51"} src={yonderFrameImage} alt="" />
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
