import React from "react";
import { useState } from "react";
function Calc(){
    var [number,setNum]=useState('');
    var Click=(num)=>{
        setNum((back)=>back+num)
    }
    var ref=()=>setNum('')

    var eq=()=>{
        try {
            const result = eval(number); 
            setNum(result.toString()); 
          } catch (error) {
            setNum(number="Not correct,press 'C'")
          }

    }

    return(<div className="all">
        <h1 className="Calculator">Calculator</h1>
        <div className="answer">
                <div className="Yournum">{number}</div>
            </div>
        <div className="numab"> 
            <div className="num">   
                <div onClick={()=>Click(1)} className="qqq">1</div>
                <div onClick={()=>Click(2)} className="qqq">2</div>
                <div onClick={()=>Click(3)} className="qqq">3</div>
                <div onClick={()=>Click(4)} className="qqq">4</div>
                <div onClick={()=>Click(5)} className="qqq">5</div>
                <div onClick={()=>Click(6)} className="qqq">6</div>
                <div onClick={()=>Click(7)} className="qqq">7</div>
                <div onClick={()=>Click(8)} className="qqq">8</div>
                <div onClick={()=>Click(9)} className="qqq">9</div>
                <div className="num1">  
                <div onClick={()=>Click(0)} className="qqq">0</div>
                <div onClick={()=>ref()} className="qqq">C</div>
                <div onClick={()=>eq()} className="qqq">=</div>
                <div onClick={()=>Click('.')} className="qqq">.</div>
                </div>
            </div>
            <div className="Abil">
                <div onClick={()=>Click("+")} className="www">+</div>
                <div onClick={()=>Click("-")} className="www">-</div>
                <div onClick={()=>Click("*")} className="www">*</div>
                <div onClick={()=>Click("/")} className="www">/</div>
            </div>
        </div>
            
        </div>
    )
}
export default Calc


/*    var eq=()=>{
        try {
            const result = eval(number); // Вычисляем результат
            setNum(result.toString()); // Обновляем состояние с результатом
          } catch (error) {
            setNum("Error"); // Если что-то пошло не так, показываем ошибку
          }

    }*/