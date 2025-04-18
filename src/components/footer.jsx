import React from "react";
import {useContext} from "react";
import { AppContext } from "./context/Education5.jsx";

const Footer=()=>{
    const {phone}=useContext(AppContext);
    return(
          <div className="Footer">
            <h2>Footer:</h2>
            <h3>Phone:{phone}</h3>
          </div>
    )
}
export default Footer