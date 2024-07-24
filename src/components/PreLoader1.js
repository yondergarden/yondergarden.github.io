import React from "react";
import ReactLoading from "react-loading";

function PreLoader1() {
  return (
    <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center'}}>
      <ReactLoading
        type={"bars"}
        color={"#FFFF00"}
        height={100}
        width={100}
      />
      <p style={{marginTop: '20px', color: '#FFFF00'}}>Loading...</p>
    </div>
  );
}

export default PreLoader1;
