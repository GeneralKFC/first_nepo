import React, { useCallback } from "react";
import {useState,useEffect,useRef,useMemo} from "react";
import Header2 from "./Header(copy)";
function Education4(){

const [count,setCount]=useState(0);

const newFunction=useCallback((count)=>{},[count])

return(<div className="Education_container">
    <Header2 newFunction={newFunction}/>
    <h1>{count}</h1>
    <button onClick={()=>setCount(prev=>prev+1)}>Click here</button>

    </div>)
}
export default Education4