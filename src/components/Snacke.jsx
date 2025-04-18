import React, { useEffect, useState, useRef } from "react";
function Snacke(){
    const snackeHead=useRef(null);
    const Lose=useRef(null);
    const fieldArray=[
        {id:-10,content:<div className="catch_field"></div>},
        {id:-9,content:<div className="catch_field"></div>},
        {id:-8,content:<div className="catch_field"></div>},
        {id:-7,content:<div className="catch_field"></div>},
        {id:-6,content:<div className="catch_field"></div>},
        {id:-5,content:<div className="catch_field"></div>},
        {id:-4,content:<div className="catch_field"></div>},
        {id:-3,content:<div className="catch_field"></div>},
        {id:-2,content:<div className="catch_field"></div>},
        {id:-1,content:<div className="catch_field"></div>},
    
        {id:1,content:<div className="white_field"></div>},
        {id:2,content:<div className="white_field"></div>},
        {id:3,content:<div className="white_field"></div>},
        {id:4,content:<div className="white_field"></div>},
        {id:5,content:<div className="white_field"></div>},
        {id:6,content:<div className="white_field"></div>},
        {id:7,content:<div className="white_field"></div>},
        {id:8,content:<div className="white_field"></div>},
        {id:9,content:<div className="white_field"></div>},
        {id:10,content:<div className="white_field"></div>,wall:true},
        {id:11,content:<div className="white_field"></div>},
        {id:12,content:<div className="white_field"></div>},
        {id:13,content:<div className="white_field"></div>},
        {id:14,content:<div className="white_field"></div>},
        {id:15,content:<div className="white_field"></div>},
        {id:16,content:<div className="white_field"></div>},
        {id:17,content:<div className="white_field"></div>},
        {id:18,content:<div className="white_field"></div>},
        {id:19,content:<div className="white_field"></div>},
        {id:20,content:<div className="white_field"></div>,wall:true},
        {id:21,content:<div className="white_field"></div>},
        {id:22,content:<div className="white_field"></div>},
        {id:23,content:<div className="white_field"></div>},
        {id:24,content:<div className="white_field"></div>},
        {id:25,content:<div className="white_field"></div>},
        {id:26,content:<div className="white_field"></div>},
        {id:27,content:<div className="white_field"></div>},
        {id:28,content:<div className="white_field"></div>},
        {id:29,content:<div className="white_field"></div>},
        {id:30,content:<div className="white_field"></div>},
        {id:31,content:<div className="white_field"></div>},
        {id:32,content:<div className="white_field"></div>},
        {id:33,content:<div className="white_field"></div>},
        {id:34,content:<div className="white_field"></div>},
        {id:35,content:<div className="white_field"></div>},
        {id:36,content:<div className="white_field"></div>},
        {id:37,content:<div className="white_field"></div>},
        {id:38,content:<div className="white_field"></div>},
        {id:39,content:<div className="white_field"></div>},
        {id:40,content:<div className="white_field"></div>},
        {id:41,content:<div className="white_field"></div>},
        {id:42,content:<div className="white_field"></div>},
        {id:43,content:<div className="white_field"></div>},
        {id:44,content:<div className="white_field"></div>},
        {id:45,content:<div className="white_field"></div>},
        {id:46,content:<div className="white_field"></div>},
        {id:47,content:<div ref={snackeHead} className="SnackeBlack_field"></div>},
        {id:48,content:<div className="white_field"></div>},
        {id:49,content:<div className="white_field"></div>},
        {id:50,content:<div className="white_field"></div>},
        {id:51,content:<div className="white_field"></div>},
        {id:52,content:<div className="white_field"></div>},
        {id:53,content:<div className="white_field"></div>},
        {id:54,content:<div className="white_field"></div>},
        {id:55,content:<div className="white_field"></div>},
        {id:56,content:<div className="white_field"></div>},
        {id:57,content:<div className="white_field"></div>},
        {id:58,content:<div className="white_field"></div>},
        {id:59,content:<div className="white_field"></div>},
        {id:60,content:<div className="white_field"></div>},
        {id:61,content:<div className="white_field"></div>},
        {id:62,content:<div className="white_field"></div>},
        {id:63,content:<div className="white_field"></div>},
        {id:64,content:<div className="white_field"></div>},
        {id:65,content:<div className="white_field"></div>},
        {id:66,content:<div className="white_field"></div>},
        {id:67,content:<div className="white_field"></div>},
        {id:68,content:<div className="white_field"></div>},
        {id:69,content:<div className="white_field"></div>},
        {id:70,content:<div className="white_field"></div>},
        {id:71,content:<div className="white_field"></div>},
        {id:72,content:<div className="white_field"></div>},
        {id:73,content:<div className="white_field"></div>},
        {id:74,content:<div className="white_field"></div>},
        {id:75,content:<div className="white_field"></div>},
        {id:76,content:<div className="white_field"></div>},
        {id:77,content:<div className="white_field"></div>},
        {id:78,content:<div className="white_field"></div>},
        {id:79,content:<div className="white_field"></div>},
        {id:80,content:<div className="white_field"></div>},
        {id:81,content:<div className="white_field"></div>},
        {id:82,content:<div className="white_field"></div>},
        {id:83,content:<div className="white_field"></div>},
        {id:84,content:<div className="white_field"></div>},
        {id:85,content:<div className="white_field"></div>},
        {id:86,content:<div className="white_field"></div>},
        {id:87,content:<div className="white_field"></div>},
        {id:88,content:<div className="white_field"></div>},
        {id:89,content:<div className="white_field"></div>},
        {id:90,content:<div className="white_field"></div>},
        {id:91,content:<div className="white_field"></div>},
        {id:92,content:<div className="white_field"></div>},
        {id:93,content:<div className="white_field"></div>},
        {id:94,content:<div className="white_field"></div>},
        {id:95,content:<div className="white_field"></div>},
        {id:96,content:<div className="white_field"></div>},
        {id:97,content:<div className="white_field"></div>},
        {id:98,content:<div className="white_field"></div>},
        {id:99,content:<div className="white_field"></div>},
        {id:100,content:<div className="white_field"></div>},

        {id:101,content:<div className="catch_field"></div>},
        {id:102,content:<div className="catch_field"></div>},
        {id:103,content:<div className="catch_field"></div>},
        {id:104,content:<div className="catch_field"></div>},
        {id:105,content:<div className="catch_field"></div>},
        {id:106,content:<div className="catch_field"></div>},
        {id:107,content:<div className="catch_field"></div>},
        {id:108,content:<div className="catch_field"></div>},
        {id:109,content:<div className="catch_field"></div>},
        {id:110,content:<div className="catch_field"></div>},
    ];
    const [General,setGeneral]=useState(fieldArray);
    const [Run,setRun]=useState(false);
    const StartSnacke=()=>{
        setRun(true);
    }
    useEffect(()=>{
        const newArray=[...General];
        let findSnacke=General.findIndex((item)=>item.id===47);
        console.log('Идёёт');
        const LozeFunc=()=>{
            const LoseTimeout=setTimeout(() => {
                Lose.current.style.display="none";
                snackeHead.current.style.transform = "rotate(0deg)";
                clearTimeout(LoseTimeout);
                setGeneral(fieldArray);
            }, 3000);
        }
        console.log(findSnacke);
        if(findSnacke<10 || findSnacke>=110){
            Lose.current.style.display="flex";
            setRun(false);
            LozeFunc();
        }
        if(findSnacke%10===0){
            console.log('Попал');
            const HandleLeftError=(e)=>{
                switch(e.key.toUpperCase()){
                    case 'A':
                        console.log('перед фолз');
                        setRun(false);
                        Lose.current.style.display="flex";
                        LozeFunc();
                        console.log('Влево ЛУЗ');
                    break;
                    case 'W':
                            snackeHead.current.style.transform = "rotate(90deg)";
                            [newArray[findSnacke-10], newArray[findSnacke]] = [newArray[findSnacke], newArray[findSnacke-10]];
                            setGeneral(newArray);
                            console.log('UP сдвиг');
                    break;
                    case 'S':
                        snackeHead.current.style.transform = "rotate(270deg)";
                        [newArray[findSnacke+10], newArray[findSnacke]] = [newArray[findSnacke], newArray[findSnacke+10]];
                        setGeneral(newArray);
                        console.log('Down сдвиг');
                    break;
                    case 'D':
                        snackeHead.current.style.transform = "rotate(180deg)";
                        [newArray[findSnacke+1], newArray[findSnacke]] = [newArray[findSnacke], newArray[findSnacke+1]];
                        setGeneral(newArray);
                        console.log('Right сдвиг');
            }


        }
        window.addEventListener('keydown', HandleLeftError);
        return()=>{ 
            window.removeEventListener('keydown',HandleLeftError);
        }
    }
        if(findSnacke%10===9){
            const HandleLeftError=(e)=>{
                switch(e.key.toUpperCase()){
                    case 'D':
                        setRun(false);
                        Lose.current.style.display="flex";
                        LozeFunc();
                        console.log('Вправо ЛУЗ');
                    break;
                    case 'W':
                            snackeHead.current.style.transform = "rotate(90deg)";
                            [newArray[findSnacke-10], newArray[findSnacke]] = [newArray[findSnacke], newArray[findSnacke-10]];
                            setGeneral(newArray);
                            console.log('UP сдвиг');
                    break;
                    case 'A':
                        snackeHead.current.style.transform = "rotate(0deg)";
                        [newArray[findSnacke-1], newArray[findSnacke]] = [newArray[findSnacke], newArray[findSnacke-1]];
                        setGeneral(newArray);
                        console.log('Left сдвиг');

                    break;
                    case 'S':
                        snackeHead.current.style.transform = "rotate(270deg)";
                        [newArray[findSnacke+10], newArray[findSnacke]] = [newArray[findSnacke], newArray[findSnacke+10]];
                        setGeneral(newArray);
                        console.log('Down сдвиг');
            }
        }
        window.addEventListener('keydown', HandleLeftError);
        return()=>{ 
            window.removeEventListener('keydown',HandleLeftError);
        }
        }
        if(Run===true){
 //??????????????????????????????????????????????
            // let Leftneibour=[index-1];
                 const onHandlePress=(e)=>{
                    console.log(e.key);
                 switch(e.key.toUpperCase()){
                    case 'W':
                            snackeHead.current.style.transform = "rotate(90deg)";
                            [newArray[findSnacke-10], newArray[findSnacke]] = [newArray[findSnacke], newArray[findSnacke-10]];
                            setGeneral(newArray);
                            console.log('UP сдвиг');
                    break;
                    case 'A':
                        snackeHead.current.style.transform = "rotate(0deg)";
                        [newArray[findSnacke-1], newArray[findSnacke]] = [newArray[findSnacke], newArray[findSnacke-1]];
                        setGeneral(newArray);
                        console.log('Left сдвиг');

                    break;
                    case 'S':
                        snackeHead.current.style.transform = "rotate(270deg)";
                        [newArray[findSnacke+10], newArray[findSnacke]] = [newArray[findSnacke], newArray[findSnacke+10]];
                        setGeneral(newArray);
                        console.log('Down сдвиг');

                    break;
                    case 'D':
                        snackeHead.current.style.transform = "rotate(180deg)";
                        [newArray[findSnacke+1], newArray[findSnacke]] = [newArray[findSnacke], newArray[findSnacke+1]];
                        setGeneral(newArray);
                        console.log('Right сдвиг');

                    break;
                 }
                }
                window.addEventListener('keydown', onHandlePress);
                 return()=>{
                    window.removeEventListener('keydown',onHandlePress);
                 }
        }
    
    },[General,Run]);

       

    return(
    <div className="Snacke_container">
        <div className="Snacke_field">{General.map((item,)=>(
            <div key={item.id}>{item.content}</div> 
        ))}</div>
        <div ref={Lose} className="Snacke_lose">You lose</div>
        <button onClick={()=>StartSnacke()} className="Snacke_button">Start</button>
    </div>
    )
}
export default Snacke