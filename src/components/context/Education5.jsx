import React, { createContext } from "react";

export const AppContext=createContext();

const ContextProvider=(props)=>{
    const phone="+1134235223";
    const name="CociXyi";
    return(
            <AppContext.Provider value={{phone,name}}>{props.children}</AppContext.Provider>
    )
}
export default ContextProvider