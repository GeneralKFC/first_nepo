import React, { useContext, useEffect, useState } from "react";
import { LineChart,Line } from "recharts";
import { CartesianGrid, XAxis, YAxis } from 'recharts';
import { NumContext } from "./context/ContextGraph";
const Graph=()=>{
    let {Win,All,setWin,setAll}=useContext(NumContext);
    const [data,setData] = useState([{name:0, uv: 0, pv: 0, amt: 0}]);
    useEffect(()=>{
      if(All>0){
        setData((prev)=>[...prev,{name:All, uv: Win, pv: 0, amt: 0}])
      }
    },[Win,All]);
    const Data=data;

    if(Data.length===20){
      Data.shift();
    }
    let Alllast=All;
    const RegWinChance=1-0.005;
    let LetsWinOncTime=1-(Math.pow(RegWinChance,Alllast+1));
    const [Probab,setProbab]=useState(()=>[{name:0, uv: 0, pv: 0, amt: 0}]);

    useEffect(()=>{
      if(Alllast>0){
        setProbab((prev)=>Array.isArray(prev)?
        [...prev,{name:LetsWinOncTime, uv: LetsWinOncTime, pv: 0, amt: 0}]:
        [{ name: LetsWinOncTime, uv: LetsWinOncTime, pv: 0, amt: 0 }])
      }
      if(Win>0){
        setWin(0);
        setAll(0);
        console.log('zzzzzz');
        setProbab((prev)=>Array.isArray(prev)?
        [...prev,{name:0, uv: 0, pv: 0, amt: 0}]:
        [{name:0, uv: 0, pv: 0, amt: 0}])
      }
    },[LetsWinOncTime,All,Win,setWin,Alllast,setAll]);
    useEffect(()=>{
      if(Probab.length===20){
        Probab.shift();
      }

    },[Win,Probab])


    return(
      <div className="Graph">
        <p className="graph_container1_p">Win/lose</p>
    <div className="graph_container1"> 
  <LineChart width={600} height={300} data={Data}>
    <Line type="monotone" dataKey="uv" stroke="#3c70ac" />
    <CartesianGrid stroke="#666666" />
    <XAxis dataKey="name" />
    <YAxis/>
  </LineChart>
    </div>

  <div className="graph_container2"> 
    <p className="graph_container1_p">Approximate probability of winning after each loss</p>
  <LineChart width={600} height={300} data={Probab}>
  <Line type="monotone" dataKey="uv" stroke="#3c70ac" />
  <CartesianGrid stroke="#666666" />
  <XAxis dataKey={Math.round(name)} />
  <YAxis/>
</LineChart>
  </div>
  </div>
)
}
export default Graph