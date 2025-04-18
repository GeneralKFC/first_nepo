import React, { createContext, useContext } from "react";
import {useState,useEffect,useRef,useMemo} from "react";
import { AppContext } from "./context/Education5";

const Contact=()=>{
    const {phone}=useContext(AppContext);
    const {name}=useContext(AppContext);
    return(
          <div>
            <h2>Contact:</h2>
            <h3>Name:{name} Phone:{phone}</h3>
          </div>
    )
}
export default Contact