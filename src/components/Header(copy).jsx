import React from "react";

function Header2(){
    console.log("Header rendered")
   return(<div className="Header2_text">

   <h2 >Header</h2>

</div>)
}
export default React.memo(Header2)