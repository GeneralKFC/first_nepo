import React from "react";
import {useReducer} from "react";


function Education6(){
    const initialState={count:0};
    const reducer=(state,action)=>{
        switch(action.type){
            case 'Plus':{
                return {count:state.count+1}
            }
            case 'Minus':{
                return {count:state.count-1}
            }
            case 'input':{
                return {count:action.payload}
            }
            default:{
                return state
            }
        }
    }
    const [state,dispatch]=useReducer(reducer,initialState)

    return(
        <div className="Education_container">
            <h1>{state.count}</h1>
            <button onClick={()=>dispatch({type:'Plus'})}>Plus</button>
            <button onClick={()=>dispatch({type:'Minus'})}>Minus</button>
            <input value={state.count} onChange={(e)=>dispatch({type:'input',payload:Number(e.target.value)})} className="Education2_input" type="text" />
        </div>
    )
}
export default Education6