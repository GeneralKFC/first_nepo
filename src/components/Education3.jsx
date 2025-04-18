import React from "react";
import {useState,useEffect,useRef,useMemo} from "react";
function Education3(){

      const [number, setNumber]=useState(0);
      const [counter, setCounter]=useState(0);
    function  cubeNum(num) {
        console.log('calculation done!!')
        return Math.pow(num,3)
    }
    const result=useMemo(()=> cubeNum(number),[number]);
return(<div className="Education_container">

    <input value={number} onChange={(e)=>{setNumber(e.target.value)}} className="Education2_input" type="text"></input>
    <h1>Cube of the number:{result}</h1>
    <button onClick={()=>{setCounter(counter+1)}}>Counter++</button>
    <h1>Counter:{counter}</h1>
    </div>)
}
export default Education3