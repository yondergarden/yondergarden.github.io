import React from "react";
import {Link } from "react-router-dom";

 function Page1() {

     return (
       <div>
         <p>
           This is the first page.
           <br />
           Click on the button below.
         </p>
         <Link to="/page2"><button>
           Go to Page 2
         </button>
         </Link>
       </div>
     );

 }

 export default Page1;
