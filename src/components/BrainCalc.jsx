import React,{useState,useRef, useEffect} from "react";
function BrainCalc(){
    const [nums,setNums]=useState(3);
    const Press=useRef();
    const [time,setTime]=useState(0);
    const numsActive=useRef();
    const [exit,setExit]=useState('');
    const Start=useRef();
    const Input=useRef();
    const [summ,setSumm]=useState('');
    const [maxsumm,setMaxsumm]=useState(0);
    const [zaglushka,setZaglushka]=useState(0);
    const [inputValue,setInputValue]=useState('');

    const dis1=useRef(null);
    const dis2=useRef(null);
    const minus=useRef(null);
    const plus=useRef(null);
    const [speed,setSpeed]=useState(1);
    const [timer,setTimer]=useState(180000);
    const generalTimeout = useRef(null);
    const intervalBefore=useRef(null);
    const timerAfter=useRef(null);


    const handleInputChange=(e)=>{
        setInputValue(e.target.value);
    }

    const returnTodis1=()=>{
        dis1.current.style.display="flex";
        dis2.current.style.display="none";
        Press.current.style.display="flex";
        numsActive.current.style.display="none";
        Start.current.style.display="flex";
        Input.current.style.background="white";
        minus.current.style.display="flex";
        plus.current.style.display="flex";
        setSpeed(1);
        setTimer(1800000);
        setNums(3);
        setTime(0);
        setExit('');
        setSumm('');
        setMaxsumm(0);
        setZaglushka(0);
        setInputValue('');
        
    }
    const goBrain=()=>{
        Press.current.style.display="none";
        numsActive.current.style.display="flex";
        Start.current.style.display="none";
        minus.current.style.display="none";
        plus.current.style.display="none";
        setExit(()=>{return(<button onClick={toReturn} className="BrainCalc_b2">Exit</button>)});
        const newTimer=timer/speed;
        setTimer(()=>newTimer);
        intervalBefore.current=setInterval(()=>{
            setNums(nums=>{
                if(intervalBefore.current){
                    if(nums===1){
                        return 'Go!'
                    }else{
                        return nums -1;
                    }
                }else{
                    return;
                }

                

            });
        },1000)
        

        setTimeout(() => {
            clearInterval(intervalBefore.current);
            setNums(calcBrain());
            goTime();
            return;
        }, 4000);
        const goTime=()=>{
            timerAfter.current=setInterval(()=>{
                setTime(time=>time+1);
            },1000)
            generalTimeout.current=setTimeout(()=>{
                clearInterval(timerAfter.current);
                dis1.current.style.display="none";
                dis2.current.style.display="flex";
                dis2.current.style.flexdirection="column";
 
            },newTimer);

        }    
        const toReturn = () => {
            // Останавливаем generalTimeout, если он существует
            if (generalTimeout.current) {
                clearTimeout(generalTimeout.current);
              }
              if (timerAfter.current) {
                clearInterval(timerAfter.current);
              }
              if (intervalBefore.current) {
                clearInterval(intervalBefore.current);
              }
            dis1.current.style.display = "none";
            dis2.current.style.display = "flex";
            dis2.current.style.flexDirection = "column";
          };
    }
    const calcBrain=()=>{
        const a=Math.round(Math.random()*(10-1)+1);
        const b=Math.round(Math.random()*(10-1)+1);
        const c=Math.round(Math.random()*(10-1)+1);
        const d=Math.round(Math.random()*(10-1)+1);
        const arr=['+','-','*','/'];
        const randomElem1 = arr[Math.floor(Math.random() * arr.length)]
        const randomElem2 = arr[Math.floor(Math.random() * arr.length)]
        const randomElem3 = arr[Math.floor(Math.random() * arr.length)]
        const result=String(a+randomElem1+b+randomElem2+c+randomElem3+d)
        console.log(result)
        setSumm(()=>result)
        setMaxsumm(()=> { 
                const Allresult = (eval(result)); 
                console.log(Allresult);
                console.log(Allresult.toFixed(2));
                setMaxsumm(()=>{ return Allresult.toFixed(2).toString()}); 
    
})


} 
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          // Устанавливает значение из input в outputж
          const newValue=Number(eval(inputValue));
          // Чистит inputж
          console.log('нажата Ентер');
          setInputValue('');
          isCorrect(newValue);
        }
      };
      const isCorrect=(newValue)=>{
        console.log(newValue.toFixed(2));
        console.log(Number(maxsumm));
        if(Number(newValue.toFixed(2))===Number(maxsumm)){
            console.log('correct')
            Input.current.style.background="lightgreen" ;
            setZaglushka((a)=>a+1);
            console.log(zaglushka);
            calcBrain();
        }else{
            console.log('notcorrect')
            Input.current.style.background="red";
        }
      }
      useEffect(() => {
        return () => {

          // Очистка таймеров при размонтировании компонента
          if (generalTimeout.current) {
            clearTimeout(generalTimeout.current);
          }
          if (timerAfter.current) {
            clearInterval(timerAfter.current);
          }
          if (intervalBefore.current) {
            clearInterval(intervalBefore.current);
          }
        };
      }, []);
    return(
    <div>
        <div ref={dis2} className="BrainCalc_container2">
            <h1>Congratulations</h1>
            <p className="BrainCalc_h1">{zaglushka} at {time}s</p>
            <p className="BrainCalc_h1">Your speed:{speed}</p>
            <button onClick={returnTodis1} className="BrainCalc_b2">Return</button>
        </div>
        <div ref={dis1} className="BrainCalc_container">
            <h1 className="BrainCalc_h1">Check your brain speed</h1>
            <div className="BrainCalc_show">
                <div className="BrainCalc_speed">Speed x{speed}</div>
                <div ref={Press} className="BrainCalc_showNumbers">Press:"Start".</div>
                <div ref={numsActive} className="BrainCalc_showNumbers_active">{nums}{summ}</div>
                <div className="BrainCalc_speed">Time:{time}s</div>
            </div>
            <input ref={Input} value={inputValue} onKeyPress={handleKeyPress}  onChange={handleInputChange} placeholder="Your answer" className="BrainCalc_EnterNumber"></input>
            <div className="BrainCalc_Buttons">
                <button ref={minus} onClick={()=>setSpeed(speed=>{if(speed>1){return speed-1;}else{return 1;}})} className="BrainCalc_b1">Speed -1</button>
                <button ref={Start} onClick={()=>goBrain()} className="BrainCalc_b2">Start</button>
                {exit}
                <button ref={plus} onClick={()=>setSpeed(speed=>{if(speed<5){return speed+1;}else{return 5;}})} className="BrainCalc_b3">Speed +1</button>
            </div>
        </div>
    </div>)
}
export default BrainCalc