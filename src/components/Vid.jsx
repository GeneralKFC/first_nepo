import React, {  useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

const videos = [
    { id: 1, content: "music", url: "https://www.youtube.com/watch?v=_S7WEVLbQ-Y&t=1733s" },
    { id: 2, content: "iq", url: "https://www.youtube.com/watch?v=FoSgDtqb0Zc" },
    { id: 3, content: "iq", url: "https://www.youtube.com/watch?v=HD3b9B-AOh8" },
    { id: 4, content: "sport", url: "https://www.youtube.com/watch?v=vIRZfVOwKkE" },
    { id: 5, content: "music", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }, // Rick Astley - Never Gonna Give You Up
    { id: 6, content: "music", url: "https://www.youtube.com/watch?v=JGwWNGJdvx8" }, // Ed Sheeran - Shape of You
    { id: 7, content: "iq", url: "https://www.youtube.com/watch?v=G0WTFfZqjz0" }, // Как работает квантовый компьютер
    { id: 8, content: "iq", url: "https://www.youtube.com/watch?v=2Uj1A9AguFs" }, // Теория струн за 5 минут
    { id: 9, content: "sport", url: "https://www.youtube.com/watch?v=6xGuGSDsx8Q" }, // Топ-10 моментов NBA
    { id: 10, content: "sport", url: "https://www.youtube.com/watch?v=4D3N6Tl-fUU" }, // Тренировка с собственным весом
    { id: 11, content: "music", url: "https://www.youtube.com/watch?v=kJQP7kiw5Fk" }, // Luis Fonsi - Despacito
    { id: 12, content: "iq", url: "https://www.youtube.com/watch?v=6Af6b_wyiwI" }, // Как работает мозг
    { id: 13, content: "sport", url: "https://www.youtube.com/watch?v=7ghhRHRP6t4" }, // Лучшие голы ЧМ-2022
    { id: 14, content: "music", url: "https://www.youtube.com/watch?v=YQHsXMglC9A" }, // Adele - Hello
    { id: 15, content: "iq", url: "https://www.youtube.com/watch?v=w3ebQK7evbw" } // Почему время относительно?
];
const advertising={id:1,content:"advertising",url:"https://www.youtube.com/watch?v=QllAaqL0mcE"};

function Vid(){
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [VideoWindow,setVideoWindow]=useState(true);
    const [showVid,setShowVid]=useState();
    const [MainVid,setMainVid]=useState(videos);
    const [ToAllVid,setToAllVid]=useState(videos);
    const Player=useRef([]);
    const Player1=useRef([]);
    const VidShow=useRef(null);
    const VidPreviuw=useRef(null);
    const VidSelect=useRef(null);
    const handleOnchange=(e)=>{
        setSelectedCategory(e.target.value);
    }
    const showfirstVid=async(id)=>{
        let newVideo= videos.filter((item,ind)=> item.id===id);
        setShowVid(newVideo);
        setVideoWindow(false);
        /*setTimeout(()=>{
           if (Player.current[index]?.getInternalPlayer()?.pauseVideo) {
            Player.current[index].getInternalPlayer().pauseVideo();
          } 
          else if (Player.current[index]?.getInternalPlayer()?.pause) {
            Player.current[index].getInternalPlayer().pause();
          }
          
        },1000);*/
    }
    const showAdditionalVid=async(id)=>{
        let newVideo= videos.filter((item,ind)=> item.id===id);
        setShowVid(newVideo);
    }
    useEffect(()=>{
        if(VideoWindow){
            VidSelect.current.style.display="flex";
        }else{
            VidSelect.current.style.display="none";
        }
    },[VideoWindow])
    return(
    <div className="Vid_COntainer">
        <select ref={VidSelect} value={selectedCategory} onChange={handleOnchange} className="Vid_Tabs">
            <option value={"All"} className="TabsVid">All</option>
            <option value={"music"} className="TabsVid">Musiс</option>
            <option value={"iq"} className="TabsVid">IQ</option>
            <option value={"sport"}className="TabsVid">Sport</option>
        </select>
        {VideoWindow && (<div ref={VidPreviuw} className="Vid_Previuw">     
            {MainVid
                .filter(item => selectedCategory === 'All' || item.content === selectedCategory)
                .map((item,index) => (
                    <div className="Vid_Previuw_Post">
                        <ReactPlayer
                        ref={el=>Player.current[index]=el}
                        onClick={()=>showfirstVid(item.id)}
                        key={item.id}
                        url={item.url}
                        width="100%"
                        height="100%"
                        controls
                        light
                        />
                    </div>
            ))}
          
        </div>)}
        {!VideoWindow && (<div ref={VidShow} className="Vid_Show">
            <div className="Vid_LeftSide">
                <div className="Vid_Back" onClick={()=>setVideoWindow(true)}>Back</div>
                <div className="Vid_Video">
                    {showVid.map((item,index)=>(
                        <ReactPlayer
                        ref={el=>Player1.current[index]=el}
                        key={item.id}
                        url={item.url}
                        width="100%"
                        height="100%"
                        controls
                        light
                        />
                    ))}
                </div>
            </div>
            <div className="Vid_rightside">
                <h1 className="Vid_rightside_text">Похожие</h1>
                <div className="Vid_rightside_Similar_video">
                        {ToAllVid.filter((item)=>(item.content===showVid[0].content && item.id!== showVid[0].id)).map((item,index)=>(
                            <div className="Vid_Similar_Post">
                                <ReactPlayer
                                ref={el=>Player1.current[index]=el}
                                key={item.id}
                                url={item.url}
                                onClick={()=>showAdditionalVid(item.id)}
                                width="100%"
                                height="100%"
                                controls
                                light
                                />
                            </div>
                        ))}
                </div>
            </div>
        </div>)}
    </div>
)    


}
export default Vid