import React,{useState} from "react";

function Count(){
    var [count,setCount]=useState(0);
    var plus=()=>{
        setCount(count+1);
    };
    var minus=()=>{
        setCount(count-1);
    };
    var Ref=()=>{
        setCount(0)
    }
    return(
        <div className="ooo">
            <h1 className="ccc">Counter</h1>
            <div className="text">{count}</div>
            <div className="but">
                <div className="Minus" onClick={minus}>Minus</div>
                <div className="plus" onClick={plus}>Plus</div>
            </div>
            <div className="refresh" onClick={Ref}>refresh</div>
        </div>
    )
}
export default Count