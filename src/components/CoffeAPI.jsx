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
    const [MuteMass,setMuteMass]=useState([]);
    const [showAll,setshowAll]=useState(false);
    const [showFullFilter,setshowFullFilter]=useState(false);
    const [NoObj,setNoObj]=useState();
    const CoffeeFilter=()=>{
        if(DoSelect===false){
            setDoSelect(true);
        }else{
            setDoSelect(false);
        }
        
    }
    const Search=()=>{
        if(CoffeeValue===''){
            setshowAll(true);
            setshowFullFilter(false);
            Page1.current.style.display="none";
            Page2.current.style.display="flex";
        }else if(CoffeeValue!==''){
            setshowAll(false);
            setshowFullFilter(true);
            Page1.current.style.display="none";
            Page2.current.style.display="flex";
        }
    }
    useEffect(()=>{
        if(showFullFilter){
            const www=PostCoffee.filter(el => el.title === CoffeeValue);
            if(www.length===0){
                const searchPost=[];
                console.log(searchPost);
                for(let i=0;i<PostCoffee.length;i++){
                    const name=PostCoffee[i].title;
                       if(name.includes(CoffeeValue || CoffeeValue.toUpperCase())){
                        searchPost.push(PostCoffee[i]);
                       }
                }
                if(searchPost.length===0){
                    console.log('wkwr')
                    setNoObj(<p>Not found</p>);
                }else{
                    console.log('wkwr')
                    setMuteMass(searchPost);
                }
                
            }else{
                setMuteMass(www);
                console.log(www);
            }
            
        }
    },[showFullFilter,CoffeeValue,PostCoffee,])
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
        
    },[DoSelect,PriseInp]);

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
        setshowAll(false);
            setshowFullFilter(false);
    }
    useEffect(()=>{
        const fetchPost=async()=>{
            try{
                const responceIce= await fetch(`${BASE_URL_Ice_Coffee}`);
                const postsCold=await responceIce.json();
                const responceHot=await fetch(`${BASE_URL_HOt_Coffee}`);
                const postsHot=await responceHot.json();
                setPostCoffee([...postsCold,...postsHot]);
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
    return(
    <div className="CoffeeAPIs_container">

        <div ref={Page1} className="CoffeeAPIs_page1">
            <div ref={Select} className="SelectedCofffee">
                <input className="SelectedCofffee_Price_input" ref={getPrice} onChange={(w)=>setPriseInp(w.target.value)} placeholder="price (0-6)"></input>
                <ul ref={Select_ul} className="SelectedCofffee_UL">
                    <li >With Karamellsirap</li>
                    <li >With Espresso</li>
                    <li >With Is</li>
                    <li onClick={()=>ShowInputPrice()}>Price</li>
                </ul>
            </div>
            <div ref={CoffeeSelect} onClick={()=>CoffeeFilter()} className="CoffeeAPIs_select">Param ↓</div>
            <input type="text" value={CoffeeValue} onChange={(w)=>setCoffeeValue(w.target.value)} placeholder="Search your coffee" className="CoffeeAPIs_input"></input>
            <div onClick={()=>Search()} className="CoffeeAPIs_button">Search</div>
        </div>

        <div ref={Page2} className="CoffeeAPIs_page2">
            <div className="ShowCoffee_Back" onClick={()=>ShowPage1()}>← Back</div>
            <div className="ShowCoffee_Coffee">
                    {NoObj}
                    {showAll && (PostCoffee.map((post)=>{
                        return <li className="ShowCoffee_Coffee_post" key={post.title}>
                                    <h1 className="ShowCoffee_Coffee_title">{post.title}</h1>
                                    <img className="ShowCoffee_Coffee_img" alt="Coffee photo" src={post.image}></img>
                                    <p className="ShowCoffee_Coffee_price">{post.price}</p>
                                </li>
                    }))}

                    {showFullFilter && (MuteMass.map((post)=>{
                        return  <li className="ShowCoffee_Coffee_post" key={post.title}>
                                    <h1 className="ShowCoffee_Coffee_title">{post.title}</h1>
                                    <img className="ShowCoffee_Coffee_img" alt="Coffee photo" src={post.image}></img>
                                    <p className="ShowCoffee_Coffee_price">{post.price}</p>
                                </li>
                    }))}
                
            </div>
        </div>

        <div ref={Page3} className="CoffeeAPIs_page3">
        <div className="ShowCoffee_Back" onClick={()=>ShowPage2()}>← Back</div>
        </div>

    </div>
)
}
export default CoffeeAPIs