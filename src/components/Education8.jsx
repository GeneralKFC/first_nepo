import React from "react";
import useLocalStorage from "./Hooks/useLocalStorage";


function Education8(){
    const [name,setName]=useLocalStorage('username','')
    const [id,setId]=useLocalStorage('userid','')

    return(
        <div className="Education_container">
            <input value={name} onChange={(e)=>setName(e.target.value)}  placeholder="Your name" className="Education2_input" type="text"/>
            <h2>Hello, {name}!!!</h2>
            <input value={id} onChange={(e)=>setId(e.target.value)}  placeholder="Your name" className="Education2_input" type="text"/>
            <h2>Your id: {id}!!!</h2>
        </div>
    )
}
export default Education8