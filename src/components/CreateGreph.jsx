import React, { useEffect,useRef,useState } from 'react';
import { CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from 'recharts';

function CreateGraph(){
    const [Expression,setExpression]=useState('');
    const [data,setData] = useState([{x:-2,y:4},{x:0,y:0},{x:2,y:4}]);
    const [VisibleError,setVisibleError]=useState(false);
    const [ErrorRed,setErrorRed]=useState(false)
    const ErrorRef=useRef(null);
    let [x,setX]=useState(0);
    let [y,setY]=useState(0);
      const CreateViue=(e)=>{
        if(e.key==='Enter'){
            setData([]);
            const Str=Expression;
            Str.toString();
                    const func = parseExpression(Str);
                    for(let i=-100;i<=100;i++){
                        const finish=func(i);
                        setX(i);
                        setY(finish)
                        setData((prev)=>[...prev,{x:i,y:finish}])
                    }
                


        }
      }
      const parseExpression=(Str)=>{
        const formattedExpr = Str.replace(/(\d+)x/g, '$1*x')  // 3x → 3*x
        .replace(/x(\d+)/g, 'x*$1')  // x4 → x*4
        .replace(/\/x/g, '/x')  // /x → /x (уже корректно)
        .replace(/\^/g, '**')  // ^ → **
        .replace(/x²/g, 'x**2')
        .replace(/x³/g, 'x**3')
        .replace(/(\d+)²/g, '$1**2')
        .replace(/(\d+)³/g, '$1**3')
        .replace(/(\d+)\(/g, '$1*(')
        .replace(/sin\(/g, 'Math.sin(')
        .replace(/cos\(/g, 'Math.cos(')
        .replace(/sqrt\(/g, 'Math.sqrt(')
        .replace(/π/g, 'Math.PI')
        .replace(/\|([^|]+)\|/g, 'Math.abs($1)')
        try {
            const func = new Function('x', `return ${formattedExpr};`);
            
            // Возвращаем обёртку, которая перехватывает ошибки при вычислениях
            return (x) => {
              try {
                const result = func(x);
                // Проверяем, что результат - допустимое число
                return Number.isFinite(result) ? result : NaN;
              } catch {
                setVisibleError(true);
                setErrorRed(true)
                return NaN;
              }
            };
          } catch {
            setVisibleError(true);
            setErrorRed(true)
            return () => NaN;
          }
        }
      
        useEffect(()=>{
            if(VisibleError){
                const timer=setTimeout(() => {
                    setVisibleError(false);
                    setErrorRed(false);
                     clearTimeout(timer);
                }, 3000);
                
            }
        
      },[VisibleError])

      const minX = Math.min(...data.map((d) => d.x));
      const minY = Math.min(...data.map((d) => d.y));


    return(
    <div className="Create_Graph_container">
        <h1 className="Create_Graph_text">Create</h1>
        <div className="Create_Graph_Graph">

        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          margin={{
            top: 5,
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />

          <YAxis
            dataKey="y"
            domain={['auto', 'auto']}
            type="number"
            interval={0}
            label={{
              value: `y`,
              style: { textAnchor: 'middle' },
              angle: -90,
              position: 'left',
              offset: -10,
            }}
            allowDataOverflow={true}
            strokeWidth={minX < 0 ? 0 : 1}
          />

          <XAxis
            dataKey="x"
            domain={['auto', 'auto']}
            interval={0}
            type="number"
            label={{
              key: 'xAxisLabel',
              value: 'x',
              position: 'bottom',
            }}
            allowDataOverflow={true}
            strokeWidth={minY < 0 ? 0 : 1}
          />

          {minY < 0 && <ReferenceLine y={0} stroke="gray" strokeWidth={1.5} strokeOpacity={0.65} />}
          {minX < 0 && <ReferenceLine x={0} stroke="gray" strokeWidth={1.5} strokeOpacity={0.65} />}

          <Line  strokeWidth={2} data={data} dot={false} type="monotone" dataKey="y" stroke="red" tooltipType="none" />
        </LineChart>
      </ResponsiveContainer>

        </div>
        <div ref={ErrorRef} style={{display: VisibleError?'flex':'none'}} className='Create_Graph_Error'>Not correct</div>
        <div className="Create_Graph_divinput">
            <input style={{background:ErrorRed?'red':'#d4f500'}} onKeyDown={CreateViue} value={Expression} onChange={(e)=>setExpression(e.target.value)}  type="text"  className="Create_Graph_input" placeholder="y=sqrt(x^5+1)*(3|x|+1)"></input>
        </div>
    </div>
)
}
export default CreateGraph