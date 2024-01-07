// EpisodesPage.js
import React from 'react';
import Background from '../components/Background/Background';


const EpisodesPage = (props) => {
  const id = props.episode.id

  // Check if id is undefined or not a valid integer
  if (id === undefined || isNaN(parseInt(id, 10))) {
    // Handle the case where id is not provided or not a valid integer
    return <div>Invalid episode ID</div>;
  }

  return (
    <div>
      <Background/>
      <video className="center-home layer-50" autoPlay muted loop>
          <source src={props.episode.mp4} type="video/mp4"/>
          Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default EpisodesPage;
