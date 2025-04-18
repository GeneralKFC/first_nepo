
import React, { useState } from "react";

function Puzzle() {

  const mass1 = [
    { id: 1, content: <div className="p1p1"></div> },
    { id: 2, content: <div className="p2p1"></div> },
    { id: 3, content: <div className="p3p1"></div> },
    { id: 4, content: <div className="p4p1"></div> },
    { id: 5, content: <div className="p5p1"></div> },
    { id: 6, content: <div className="p6p1"></div> },
    { id: 7, content: <div className="p7p1"></div> },
    { id: 8, content: <div className="p8p1"></div> },
    { id: 9, content: null }, 
  ];

  const mass2 = [
    { id: 1, content: <div className="p1p"></div> },
    { id: 2, content: <div className="p2p"></div> },
    { id: 3, content: <div className="p3p"></div> },
    { id: 4, content: <div className="p4p"></div> },
    { id: 5, content: <div className="p5p"></div> },
    { id: 6, content: <div className="p6p"></div> },
    { id: 7, content: <div className="p7p"></div> },
    { id: 8, content: <div className="p8p"></div> },
    { id: 9, content: null }, 
  ];


  var zadwishka=0;
  const [items1, setItems1] = useState(mass1);
  const [items2, setItems2] = useState(mass2);
  const [zadwishka1, setzadwishka1] = useState(zadwishka);
  
  var aaa = () => {


    var shuffledItems = [...items1].sort(() => Math.random() - 0.3);
    const emptyIndex1 = shuffledItems.findIndex((item) => item.id === 9);
    var newItems1=shuffledItems.filter((item,index)=>index!==emptyIndex1);
    newItems1.push({ id: 9, content: null })
    setItems1(newItems1);
    var newZadwishka=zadwishka+1;
    setzadwishka1(newZadwishka);
  };
  console.log(zadwishka1)


  // Перемещение 
  const moveTile = (index) => {
    const emptyIndex = items2.findIndex((item) => item.content === null); // Находим пустое место
    var adjacentIndices = [index - 1,  index - 3, index + 3,index + 1]; // Соседние индексы
    if(emptyIndex===3){
      adjacentIndices = [index - 1,  index - 3, index + 3,];
    }
    if(emptyIndex===2){
      adjacentIndices = [index + 1,  index - 3, index + 3,];
    }
    if(emptyIndex===5){
      adjacentIndices = [index + 1,  index - 3, index + 3,];
    }
    if(emptyIndex===6){
      adjacentIndices = [index - 1,  index - 3, index + 3,];
    }
    if (adjacentIndices.includes(emptyIndex)) {
      const newItems = [...items2];
      //Меняем
      [newItems[index], newItems[emptyIndex]] = [newItems[emptyIndex], newItems[index]];
      setItems2(newItems);
    }


  };
  var [showCongrats,setCongrats]=useState(false);

  var Congrats=<div className="Congratulations">Congratulations!!!</div>;
    var fff=()=>{
      if(zadwishka1===0){

        return;
      }else{
        var c=items2.map((item) => item.id).join(',')
        var d=items1.map((item) => item.id).join(',')
        if(c===d){
          setCongrats(true); // Показываем сообщение
          setTimeout(() => {
            setCongrats(false); // Скрываем сообщение через 3 секунды
          }, 3000);

      }

    }
  }

      




  return (
    <div className="qwerty">
      <h1 className="puzzle">Puzzle</h1>
      <div className="bgshow">
        <div className="bg">
          {items2.map((item, index) => (
            <div
              key={item.id}
              onClick={() => moveTile(index)}
              className={`tile ${item.content === null ? "empty" : ""}`}
            >
              {item.content}
            </div>
          ))}
        </div>
        <button onClick={()=>aaa()} className="startpuzzle">
          Start
        </button>
        <button onClick={()=>fff()} className="startpuzzle">
          Finish
        </button>
        <div className="show">
        {items1.map((item) => (
            <div key={item.id}>
              {item.content}
            </div>
          ))}
        </div>
        <div >{showCongrats && Congrats}</div>
      </div>
    </div>
  );
}

export default Puzzle;
