import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

const videos=[{id:1,content:"music",url:"https://www.youtube.com/watch?v=_S7WEVLbQ-Y&t=1733s"},
            {id:2,content:"iq",url:"https://www.youtube.com/watch?v=FoSgDtqb0Zc"},
            {id:3,content:"iq",url:"https://www.youtube.com/watch?v=HD3b9B-AOh8"},
            {id:4,content:"sport",url:"https://www.youtube.com/watch?v=vIRZfVOwKkE"}
]

const advertising={id:1,content:"advertising",url:"https://www.youtube.com/watch?v=QllAaqL0mcE"};

function Vid(){
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectdAdvertising,setSelectdAdvertising]=useState();
    const Player=useRef([]);
    const handleOnchange=(e)=>{
        setSelectedCategory(e.target.value);
    }
    const Add=(index)=>{
        if (Player.current[index]?.getInternalPlayer()?.pauseVideo) {
            Player.current[index].getInternalPlayer().pauseVideo();
          } 
          else if (Player.current[index]?.getInternalPlayer()?.pause) {
            Player.current[index].getInternalPlayer().pause();
          }
        
        setTimeout(()=>{
            
        },5000)
    }
    return(
    <div className="Vid_COntainer">
        <select value={selectedCategory} onChange={handleOnchange} className="Vid_Tabs">
            <option value={"All"} className="TabsVid">All</option>
            <option value={"music"} className="TabsVid">Musiс</option>
            <option value={"iq"} className="TabsVid">IQ</option>
            <option value={"sport"}className="TabsVid">Sport</option>
        </select>
        <div className="Vid_Previuw">
        {videos
          .filter(item => selectedCategory === 'All' || item.content === selectedCategory)
          .map((item,index) => (
            <ReactPlayer
              ref={el=>Player.current[index]=el}
              onClick={()=>Add(index)}
              key={item.id}
              url={item.url}
              width="100%"
              height="100%"
              playing
              controls
              light
            />
          ))}
        </div>
    </div>
)    


}
export default Vid