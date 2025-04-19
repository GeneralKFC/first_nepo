import React, { useState } from "react";
import { useEffect } from "react";


function Header(){
    const [Name,setName]=useState("Vasya");
    const [Login,setLogin]=useState("Pupckin");
    useEffect(()=>{
        if(localStorage.getItem("Username/Login")!==null){
            const sur=localStorage.getItem("Username/Login");
            const surparse=JSON.parse(sur);
            setName(()=>surparse.name);
            setLogin(()=>surparse.login);
        }
    },[])
    return(
        <header>
            <p className="text">Count</p>
            <div className="Header_NL">
            <h1 className="Header_UserText">{Name}</h1>
            <h1 className="Header_UserText">{Login}</h1>
            </div>
        </header>
    )
} 
export default Header;