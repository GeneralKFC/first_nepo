import React, { useEffect, useRef, useState } from "react";
const BASE_URL_Ice_Coffee="https://api.sampleapis.com/coffee/iced";
const BASE_URL_HOt_Coffee='https://api.sampleapis.com/coffee/hot';
function CoffeeAPIs(){
    const CoffeeSelect=useRef();
    const Page1=useRef();
    const Page2=useRef();
    const Page3=useRef();
    const Select=useRef(null);
    const getPrice=useRef();
    const Select_ul=useRef();
    const [PriseInp,setPriseInp]=useState(false);
    const [DoSelect,setDoSelect]=useState(false);
    const [CoffeeValue,setCoffeeValue]=useState('');
    const [PostCoffee,setPostCoffee]=useState([]);
    const [Error,setError]=useState();
    const CoffeeFilter=()=>{
        if(DoSelect===false){
            setDoSelect(true);
        }else{
            setDoSelect(false);
        }
        
    }
    const Search=async()=>{
        if(CoffeeValue!==''){
            Page1.current.style.display="none";
            Page2.current.style.display="flex";
        }
        
    }
    const ShowInputPrice=()=>{
        if(!PriseInp){
            setPriseInp(true);
        }else{
            setPriseInp(false);
        }
        
    }
    useEffect(()=>{
        if(DoSelect){
            Select.current.style.display="flex";
        }else{
            Select.current.style.display="none";
        }
        if(PriseInp){
            getPrice.current.style.display="flex";
        }else{
            getPrice.current.style.display="none";
        }
        
    },[DoSelect,PriseInp])
    useEffect(()=>{
        const handleEnter=(e)=>{
            switch(e.key.toUpperCase()){
                case 'ENTER':
                    console.log('enter');

            }
        }
        window.addEventListener('keydown',handleEnter)
    },[]);
    const ShowPage1=()=>{
        Page1.current.style.display="flex";
        Page2.current.style.display="none";
    }
    useEffect(()=>{
        const fetchPost=async()=>{
            try{
                const responce= await fetch(`${BASE_URL_Ice_Coffee}`);
                const posts=await responce.json();
                setPostCoffee(posts);
            }catch(error){
                setError(error);
            }
        }
        fetchPost();
    },[])
    if(Error){
        return(<div>Something wrong, please try again</div>)
    }
    const ShowPage2=()=>{
        Page2.current.style.display="flex";
        Page3.current.style.display="none";
    }



    console.log(PostCoffee);

    return(
    <div className="CoffeeAPIs_container">

        <div ref={Page1} className="CoffeeAPIs_page1">
            <div ref={Select} className="SelectedCofffee">
                <input className="SelectedCofffee_Price_input" ref={getPrice} onChange={(w)=>setPriseInp(w.target.value)} placeholder="price (0-5.5)"></input>
                <ul ref={Select_ul} className="SelectedCofffee_UL">
                    <li >With Karamellsirap</li>
                    <li >With Espresso</li>
                    <li >With Is</li>
                    <li onClick={()=>ShowInputPrice()}>Price</li>
                </ul>
            </div>
            <div ref={CoffeeSelect} onClick={()=>CoffeeFilter()} className="CoffeeAPIs_select">Param ↓</div>
            <input value={CoffeeValue} onChange={(w)=>setCoffeeValue(w.target.value)} placeholder="Search your coffee" className="CoffeeAPIs_input"></input>
            <div onClick={()=>Search()} className="CoffeeAPIs_button">Search</div>
        </div>

        <div ref={Page2} className="CoffeeAPIs_page2">
            <div className="ShowCoffee_Back" onClick={()=>ShowPage1()}>← Back</div>
            <div className="ShowCoffee_Coffee">
                
                    {PostCoffee.map((post)=>{
                        return <li className="ShowCoffee_Coffee_post" key={post.id}>
                                    <h1 className="ShowCoffee_Coffee_title">{post.title}</h1>
                                    <img className="ShowCoffee_Coffee_img" alt="Coffee photo" src={post.image}></img>
                                    <p className="ShowCoffee_Coffee_price">{post.price}</p>
                                </li>
                    })}
                
            </div>
        </div>

        <div ref={Page3} className="CoffeeAPIs_page3">
        <div className="ShowCoffee_Back" onClick={()=>ShowPage2()}>← Back</div>
        </div>

    </div>
)
}
export default CoffeeAPIs