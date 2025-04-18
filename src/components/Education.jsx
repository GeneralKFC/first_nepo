import React, { useRef } from "react";
import { useEffect, useState } from "react";
function Education(){

    const [count,setCount]=useState(0);
    let [name,setName]=useState("GGG");
    useEffect(()=>{
        setTimeout(()=>{
            setName((name)=>name+1);
            setName((name)=>name.slice(1));
            if(name==="111"){
            setName((name)=>name+'G');
            setName((name)=>name.slice(1));
            }
            if(name==="11G"){
                setName((name)=>name.slice(2));
                setName((name)=>name+'GG');
                
            }
            if(name==="1GG"){
                setName(name='GGG');
                
            }
        },1000)
        
    })
    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count+1);
        },1000)
    })

return(<div className="Education_container">
        
    <h1>I've rendered {count} {name} times!</h1>

    </div>)
}
export default Education