import React, { createContext,useEffect,useState} from "react";

export const NumContext=createContext();

const NumContextProvider=(props)=>{
    const [Win,setWin]=LocalStoragee('Win',0);
    const [All,setAll]=LocalStoragee('All',0);

    function LocalStoragee(key,initialValue){
      const [Param,setParam]=useState(
          localStorage.getItem(key)?
          +localStorage.getItem(key):+initialValue
      );
      useEffect(()=>{
          localStorage.setItem(key,Param)
      },[Param,key]);
      return[Param,setParam]
  }
    return(
            <NumContext.Provider value={{Win,setWin,All,setAll}}>{props.children}</NumContext.Provider>
    )
}
export default NumContextProvider