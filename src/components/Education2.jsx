import React from "react";
import {useState,useEffect,useRef} from "react";
function Education2(){

       const [value,setValue]=useState(0);
       const count11=useRef(0);
       useEffect(()=>{
           count11.current=count11.current+1;
       },[count11.current]);

       const inputElem=useRef(null);
       const divElem=useRef(null);
       const [value1,setValue1]=useState('');
       const btnClicked=()=>{
        console.log(inputElem.current.value);
        setValue1((prev)=>inputElem.current.value)
        divElem.current.style.background="blue";
        divElem.current.style.width="auto";

       }
return(<div className="Education_container">

    <button onClick={()=>{setValue(prev=>prev-1)}}>-1</button>
    <h1>{value}</h1>
    <button onClick={()=>{setValue(prev=>prev+1)}}>+1</button>
    <h1>Render count:{count11.current}</h1>

    <input ref={inputElem} className="Education2_input" placeholder="Text" type="text"></input>
    <div ref={divElem}>{value1}</div>
    <button onClick={btnClicked}>Click here</button>
    </div>)
}
export default Education2