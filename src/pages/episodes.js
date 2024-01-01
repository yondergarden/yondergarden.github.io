import Background from "../components/Background"
import { Link } from 'react-router-dom';

function Episodes() {

  let backgroundImage = "https://cdn.glitch.global/4a3253fe-3104-44d3-8a31-8f43e023369d/circles.gif?v=1702433383009"

     return (
       <div>
        <Background/>
        <div>
        <div className="menu-container center-home">
          <div className='episodes-container'>
            {/* <h1 className="text-heading">Episodes:</h1>
            <p> This is where the information for Yonder Garden would go... If there was any ^.^</p> */}
            <Link to="http://youtube.com">
              <div className="episode">Episode 1</div>
            </Link>
        <div className="episode">Episode 2</div>
        <div className="episode">Episode 3</div>
        <div className="episode">Episode 4</div>
         
         </div>
        </div>
      </div>
       </div>
     );

 }

 export default Episodes;
