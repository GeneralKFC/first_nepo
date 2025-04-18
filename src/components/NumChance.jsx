import React, {  useContext, useEffect } from "react";
import {useState,useRef} from "react";
import { NumContext } from "./context/ContextGraph";
const NumChance=()=>{   
        const arr_num=[
            {id:1, content:<div>1</div>},
            {id:2, content:<div>2</div>},
            {id:3, content:<div>3</div>},
            {id:4, content:<div>4</div>},
            {id:5, content:<div>5</div>},
            {id:6, content:<div>6</div>},
            {id:7, content:<div>7</div>},
            {id:8, content:<div>8</div>},
            {id:9, content:<div>9</div>},
        ];
      const cubes=[
        {id:1, content:<div className="Circle_1"></div>},
        {id:2, content:<div className="Length2">
            <div className="Circle_1"></div>
            <div className="Circle_1"></div>
        </div>},
        {id:3, content:<div className="Length3">
            <div className="Circle_1"></div>
            <div className="Circle_1"></div>
            <div className="Circle_1"></div>
            </div>},
        {id:4, content:<div className="Length4">
            <div className="Circle_1"></div>
            <div className="Circle_1"></div>
            <div className="Circle_1"></div>
            <div className="Circle_1"></div>
        </div>},
        {id:5, content:<div className="Length5">
            <div className="Circle_1"></div>
            <div className="Circle_1"></div>
            <div className="Circle_1"></div>
            <div className="Circle_1"></div>
            <div className="Circle_1"></div>
        </div>},
        {id:6, content:<div className="Length6">
            <div className="Circle_1"></div>
            <div className="Circle_1"></div>
            <div className="Circle_1"></div>
            <div className="Circle_1"></div>
            <div className="Circle_1"></div>
            <div className="Circle_1"></div>
        </div>},
      ]
      let randomIndex1;
      let randomIndex2;
    const firstPlace=useRef();
    const secondPlace=useRef();
    const DivUncorrect=useRef();
    const DivCorrect=useRef();
    const zzaglushcka=useRef();
      useEffect(()=>{
        secondPlace.current.style.display="none";
        zzaglushcka.current.style.display="none";
      },[]);
    const [Items,setItem]=useState(arr_num);
    const [Cubes1,setCubes1]=useState([]);
    const [Cubes2,setCubes2]=useState([]);
    const [Congr,setCongr]=useState('');
    const [isTrue,setTrue]=useState(false);
    const [Uncorrect,setUncorrect]=useState(false);
    const {Win,setWin,All,setAll}=useContext(NumContext);

      const randomNums=()=>{
        firstPlace.current.style.display="none";
        secondPlace.current.style.display="flex";
        randomIndex1 = Math.floor(Math.random() * cubes.length);
        randomIndex2 = Math.floor(Math.random() * cubes.length);
        searchAndDelete();
        setCubes1([cubes[randomIndex1]]);
        setCubes2([cubes[randomIndex2]]);
        
      };
    useEffect(()=>{
        if(isTrue===true){
            setCongr(<div ref={DivCorrect} className="Congratulations">Congratulations</div>);
            console.log('congrat')
            return;
        }else{
            return;
        }
        
    },[isTrue])
    useEffect(()=>{
        if(Uncorrect===true){
            setUncorrect(<div ref={DivUncorrect} className="Uncorrect">Sorry, u lose</div>);
            console.log('Lose')
            return;
        }else{
            return;
        }
        
    },[Uncorrect])
    const searchAndDelete = () => {
        let summ = randomIndex1 + 1 + randomIndex2 + 1; 
        console.log("Sum to find:", summ);

        if (Items.length === 0) {
            setTrue(true); 
            secondPlace.current.style.display = "none";
            firstPlace.current.style.display = "none";
            zzaglushcka.current.style.display="flex";
            const Congratstime = setTimeout(() => {
              setItem(arr_num);
              +setWin((w)=>w+1);
              setCubes1([]);
              setCubes2([]);
              setCongr(null);
              setTrue(false);
              setUncorrect(false);
              zzaglushcka.current.style.display="none";
              firstPlace.current.style.display = "flex";
              secondPlace.current.style.display = "none";
  
              clearTimeout(Congratstime);
              console.log("refCorrect");
            }, 3000);
          }
        const singleItem = Items.find((item) => item.id === summ);
        if (singleItem) {

          const newItems = Items.filter((item) => item.id !== summ);
          setItem(newItems);
          return; 
        }
      

        let pairFound = false;
        for (let i = 0; i < Items.length; i++) {
          for (let j = i + 1; j < Items.length; j++) {
            if (Items[i].id + Items[j].id === summ) {

              const newItems = Items.filter(
                (item) => item.id !== Items[i].id && item.id !== Items[j].id
              );
              setItem(newItems);
              pairFound = true; 
              break; 
            }
          }
          if (pairFound) break; 
        }
      
        
        if (!singleItem && !pairFound) {
          setUncorrect(true); 
          secondPlace.current.style.display = "none";
          firstPlace.current.style.display = "none";
          zzaglushcka.current.style.display="flex";
          const UncorrectTime = setTimeout(() => {
            setItem(arr_num);
            setCubes1([]);
            +setAll((all)=>all+1)
            setCubes2([]);
            setCongr(null);
            setUncorrect(false);
            setTrue(false);
            firstPlace.current.style.display = "flex";
            zzaglushcka.current.style.display="none";
            secondPlace.current.style.display = "none";
            clearTimeout(UncorrectTime);
            console.log("refUncorrect");
          }, 3000);
        }
      

        
      };




    /*
    При нажатии на поле,
    кубики показывают анимацию,
    далее значения,
    после значения складываються,
    и находят цифру сверху в массиве из доступных,
    если таких нету, то с помощью сложения двух цифр из контейнера,
    если же и таких нету, то пользователь проиграл,
    Если все зактрыты, то выиграл.
    */

    return(
        <div className="NumChance_container">

            <div className="arr_num">
            {Items.map((item)=>(<div
            key={item.id}
            className="arr_nums"
            >
            {item.content}
            </div>))}</div>
            <div ref={zzaglushcka} className="NumChance_Cube_zaglushka">
            <div className="NumChance_Cubes">{Cubes1 && Cubes1.map((item) => (
                        <div key={item.id}>{item.content}</div>
                    ))}
            </div>
            <div className="NumChance_Cubes"> { Cubes2 && Cubes2.map((item) => (
                        <div key={item.id}>{item.content}</div>
                    ))}<div/>
            </div>
            </div>
            <div ref={firstPlace} onClick={()=>randomNums()} className="NumChance_Cube_container2">
                <div className="NumChance_Cubes">
                    <div className="Circle_1"></div>
                </div>
                <div className="NumChance_Cubes">
                    <div className="Length2">
                        <div className="Circle_1"></div>
                        <div className="Circle_1"></div>
                    </div>
                </div>
            </div>


            <button ref={secondPlace} onClick={()=>randomNums()} className="NumChance_Cube_container1">
            <div className="NumChance_Cubes">{Cubes1 && Cubes1.map((item) => (
                        <div key={item.id}>{item.content}</div>
                    ))}
            </div>
            <div className="NumChance_Cubes"> { Cubes2 && Cubes2.map((item) => (
                        <div key={item.id}>{item.content}</div>
                    ))}<div/>
            </div>
            </button>
                    <div>{Uncorrect}</div>
            <div>{Congr}</div>
            

        </div>

    )
}
/**/
export default NumChance