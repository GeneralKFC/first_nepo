import React, { createContext, useLayoutEffect } from "react";
import {useState,useEffect,useRef,useMemo,useReducer} from "react";


function Education7(){
    useEffect(()=>{
        console.log('Message')
    },[])
    useLayoutEffect(()=>{
        console.log('Message from layot')
    },[])
    return(
        <div className="Education_container">
                <h2>Test Message</h2>
                {Array(4).fill('').map((item,index)=>(<li key={index}>{Math.random(Math.pow(Math.random(),10))}</li>))}
        </div>
    )
}
export default Education7