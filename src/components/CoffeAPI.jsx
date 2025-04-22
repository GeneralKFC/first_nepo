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
    const [NoObj,setNoObj]=useState(false);
    const [selectedCoffee, setSelectedCoffee] = useState(null);
    const [WithCaramel,setWithCaramel]=useState(false);
    const [isLoad,setIsLoad]=useState(false);
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
    const GoWithKaramel=()=>{
        setWithCaramel(() => {
            const newVal = !WithCaramel;
            // Отложим фильтр, чтобы дождаться нового состояния
            setTimeout(() => {
                filterPost();
            }, 0);
            return newVal;
        });
        setDoSelect(false); 
    }
    console.log(WithCaramel);
    const filterPost=()=>{
        if(PriseInp===false){
            const searchPost=[];
            for(let i=0;i<PostCoffee.length;i++){
                const name=PostCoffee[i].title;
                   if((name.includes(CoffeeValue || CoffeeValue.toUpperCase())) || name.toUpperCase().includes(CoffeeValue.toUpperCase())){
                    searchPost.push(PostCoffee[i]);
                   }
            }
            if(searchPost.length===0){
                console.log('not found');
                setMuteMass([]);
                setNoObj(true);
            }else{
                if(WithCaramel){
                    let searchPostKeramel=[];
                    for(let i=0;i<searchPost.length;i++){
                        let ingr=searchPost[i].ingredients;
                        console.log(ingr);
                        if(ingr.includes('Water')){
                            searchPostKeramel.push(searchPost[i]);
                        }
                    }
                    console.log(searchPostKeramel);
                    if(searchPostKeramel.length===0){
                        console.log('Нет с карамеллью');
                        setMuteMass([]);
                        setNoObj(true);
                    }else{
                        console.log('found')
                        setMuteMass(searchPost);
                    }
                }else{
                    setMuteMass([]);
                        setNoObj(true);
                   

                }
                
            }
        }else{
            const searchPost=[];
            console.log(searchPost);
            for(let i=0;i<PostCoffee.length;i++){
                const name=PostCoffee[i].title;
                const price=PostCoffee[i].price;
                   if(((name.includes(CoffeeValue || CoffeeValue.toUpperCase())) || name.toUpperCase().includes(CoffeeValue.toUpperCase())) && price <= PriseInp){
                    searchPost.push(PostCoffee[i]);
                   }
            }
            if(searchPost.length===0){
                console.log('not found');
                setMuteMass([]);
                setNoObj(true);
            }else{
                if(WithCaramel){
                    let searchPostKeramel=[];
                    for(let i=0;i<searchPost.length;i++){
                        let ingr=searchPost[i].ingredients;
                        console.log(ingr);
                        if(ingr.includes('Water')){
                            searchPostKeramel.push(searchPost[i]);
                        }
                    }
                    if(searchPostKeramel.length===0){
                        console.log('Нет с карамеллью');
                        setMuteMass([]);
                        setNoObj(true);
                    }
                    else{
                    console.log('found')
                    setMuteMass(searchPostKeramel);
                    } 
                }else{
                    console.log('Нижний else');
                    setMuteMass(searchPost);
                }
            }
        }
    }
    useEffect(()=>{
        if(!showFullFilter) return;
            
            const timer =setTimeout(() => {
                filterPost();
            }, 0);
            return () => clearTimeout(timer);
        
    },[showFullFilter,CoffeeValue,PostCoffee,PriseInp,WithCaramel,])
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
    const ShowPage1=()=>{
        Page1.current.style.display="flex";
        Page2.current.style.display="none";
        setshowAll(false);
        setshowFullFilter(false);
        setWithCaramel(false);
        setNoObj(false);
    }
    useEffect(()=>{
        const fetchPost=async()=>{
            try{
                setIsLoad(true);
                const responceIce= await fetch(`${BASE_URL_Ice_Coffee}`);
                const postsCold=await responceIce.json();
                const responceHot=await fetch(`${BASE_URL_HOt_Coffee}`);
                const postsHot=await responceHot.json();
                setPostCoffee([...postsCold,...postsHot]);
                setIsLoad(false);
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
    const showCoffedescription=(post)=>{
        setSelectedCoffee(post);
        Page2.current.style.display="none";
        Page3.current.style.display="flex";
    }
    return(
    <div className="CoffeeAPIs_container">

        <div ref={Page1} className="CoffeeAPIs_page1">
            <div ref={Select} className="SelectedCofffee">
                <input type="number" value={PriseInp} className="SelectedCofffee_Price_input" ref={getPrice} onChange={(w)=>setPriseInp(w.target.value)} placeholder="price (0-6)"></input>
                <ul ref={Select_ul} className="SelectedCofffee_UL">
                    <li onClick={()=>GoWithKaramel()}>With Karamellsirap</li>
                    <li onClick={()=>ShowInputPrice()}>Price</li>
                </ul>
            </div>
            <div ref={CoffeeSelect} onClick={()=>CoffeeFilter()} className="CoffeeAPIs_select">Param ↓</div>
            <input type="text" value={CoffeeValue} onChange={(w)=>setCoffeeValue(w.target.value)} placeholder="Search your coffee" className="CoffeeAPIs_input"></input>
            <div onClick={()=>Search()} className="CoffeeAPIs_button">Search</div>
        </div>

        <div ref={Page2} className="CoffeeAPIs_page2">
            <div className="ShowCoffee_Back" onClick={()=>ShowPage1()}>← Back</div>
            {NoObj && <div className="ShowCoffee_Coffee_NoObj">Not found</div>}
            {isLoad && <div className="ShowCoffee_Coffee_isLoading">Loading</div>}
            <div className="ShowCoffee_Coffee">
                    {showAll && (PostCoffee.map((post)=>{
                        return <li onClick={()=>showCoffedescription(post)} className="ShowCoffee_Coffee_post" key={post.title}>
                                    <h1 className="ShowCoffee_Coffee_title">{post.title}</h1>
                                    <img className="ShowCoffee_Coffee_img" alt="Coffee photo" src={post.image}></img>
                                    <p className="ShowCoffee_Coffee_price">{post.price}</p>
                                </li>
                    }))}
                    
                    {showFullFilter && (MuteMass.map((post)=>{
                        return  <li onClick={()=>showCoffedescription(post)} className="ShowCoffee_Coffee_post" key={post.title}>
                                    <h1 className="ShowCoffee_Coffee_title">{post.title}</h1>
                                    <img className="ShowCoffee_Coffee_img" alt="Coffee photo" src={post.image}></img>
                                    <p className="ShowCoffee_Coffee_price">{post.price}</p>
                                </li>
                    }))}
            </div>
        </div>

    <div ref={Page3} className="CoffeeAPIs_page3">
        <div className="ShowCoffee_Back" onClick={ShowPage2}>← Back</div>
        {selectedCoffee && (
          <div className="CoffeeAPIs_details">
            <h1 className="CoffeeAPIs_head">{selectedCoffee.title}</h1>
            <img className="CoffeeAPIsp3_image" src={selectedCoffee.image} alt={selectedCoffee.title} />
            <p className="CoffeeAPIs_Price">Price: {selectedCoffee.price}</p>
            <p className="CoffeeAPIs_description">Description: {selectedCoffee.description}</p>
          </div>
        )}
        </div>
    </div>
);
}
export default CoffeeAPIs

/*[{"title":"Iced Latte","description":"A smooth espresso drink combined with chilled milk and ice, offering a refreshing and creamy taste.","ingredients":["Espresso","Mjölk","Is","Sirap"],"image":"https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aWNlZCUyMGxhdHRlfGVufDB8fDB8fHww","price":4.5,"id":1,"totalSales":3},
{"title":"Caramel Frappe","description":"A blended coffee drink made with espresso, caramel syrup, ice, and topped with whipped cream for a sweet, icy treat.","ingredients":["coffee","Is","Mjölk","Karamellsirap","Vispgrädde*","Karamellsås"],"image":"https://img.freepik.com/free-photo/iced-coffee-with-whipped-cream_1150-18519.jpg?t=st=1742106566~exp=1742110166~hmac=0bbd5b4ee1c65d11dfa9883aae906a0bfa703aa0e2870627c0ec2bd7393de408&w=740","price":5.75,"id":2,"totalSales":1},
{"title":"Cold Brew Coffee","description":"A slow-steeped coffee brewed in cold water for 12–24 hours, resulting in a smooth, less acidic flavor.","ingredients":["Espresso","Mjölk","Is","Sirap"],"image":"https://coffeecopycat.com/wp-content/uploads/2023/05/HowToSweetenColdBrew3-1200x1600-1.jpg","price":4.95,"id":4,"totalSales":2},
{"title":"Iced Mocha","description":"A delicious mix of espresso, cold milk, chocolate syrup, and ice, often topped with whipped cream for a sweet treat.","ingredients":["coffee","Is","Mjölk","Karamellsirap","Vispgrädde*","Karamellsås"],"image":"https://simplegraytshirt.com/wp-content/uploads/2024/11/iced-mocha-coffee-03.jpg","price":5.25,"id":5,"totalSales":1},
{"title":"Vietnamese Iced Coffee","description":"A strong, sweet drink made with dark-roast coffee and sweetened condensed milk, poured over ice.","ingredients":["coffee","Is","Mjölk","Karamellsirap","Vispgrädde*","Karamellsås"],"image":"https://img.taste.com.au/UHFv39Ks/taste/2020/05/jun20_vietnamese-iced-coffee-161761-1.jpg","price":4.85,"id":6,"totalSales":1},
{"id":7,"title":"Iced Coconut Coffee","price":5.5,"description":"A tropical twist on iced coffee, blending espresso or cold brew with creamy coconut milk and ice.","image":"https://www.helenacoffee.vn/wp-content/uploads/2023/09/Coconut-Coffee-A-Tropical-Twist-in-Your-Daily-Brew.jpg","ingredients":[],"totalSales":1},
{"title":"Nitro Cold Brew","description":"A velvety, nitrogen-infused cold brew coffee with a creamy texture and naturally sweet flavor, served on tap.","ingredients":["coffee","Is","Mjölk","Karamellsirap","Vispgrädde*","Karamellsås"],"image":"https://thebigmansworld.com/wp-content/uploads/2025/01/nitro-cold-brew3.jpg","price":5.95,"id":8,"totalSales":1},
{"title":"Iced Espresso Tonic","description":"A bold and refreshing mix of espresso poured over tonic water and ice, often with a splash of citrus.","ingredients":["coffee","Is","Mjölk","Karamellsirap","Vispgrädde*","Karamellsås"],"image":"https://cookhousediary.com/wp-content/uploads/2023/02/mixed-espresso-tonic-with-garnish-on-wooden-board.jpg","price":4.65,"id":9,"totalSales":1},
{"id":3,"title":"Iced Americano","price":3.75,"description":"A bold and refreshing drink made by pouring espresso over ice and adding water for a smooth finish.","image":"https://img.freepik.com/free-photo/glass-with-iced-coffee-table_23-2148937324.jpg?t=st=1742106286~exp=1742109886~hmac=23ad2ba04e0dad44bbd4d4304222b44d1fe897871ab1f2e0e7b88e319ff8aa3c&w=740","ingredients":[],"totalSales":100},
{"id":10,"title":"Iced Matcha Lattee","price":5.99,"description":"A refreshing blend of finely ground matcha green tea, chilled milk, and ice. It’s smooth, creamy, and packed with antioxidants for a naturally energizing drink.","image":"https://cdn.loveandlemons.com/wp-content/uploads/2023/06/iced-matcha-latte.jpg","ingredients":[],"totalSales":1}]\
[{"id":1,"title":"Black Coffee","price":1.5,"description":"A simple, bold brew made without milk or sugar. It’s rich, aromatic, and perfect for those who enjoy a pure coffee flavor.","image":"https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","ingredients":[],"totalSales":111},
{"id":3,"title":"Caramel Latte","price":2,"description":"A rich espresso drink blended with steamed milk and sweet caramel syrup. It’s smooth, creamy, and topped with a light foam for a perfect balance of sweetness.","image":"https://images.unsplash.com/photo-1599398054066-846f28917f38?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","ingredients":[],"totalSales":3},
{"id":6,"title":"Machiatto","price":2.1,"description":"A bold espresso topped with a small amount of frothy milk. It’s rich, smooth, and perfect for those who enjoy a strong coffee flavor with a hint of creaminess.","image":"https://images.pexels.com/photos/5097056/pexels-photo-5097056.jpeg","ingredients":[],"totalSales":0},
{"title":"Mocha","description":"A delicious blend of espresso, steamed milk, and chocolate syrup. It’s rich, creamy, and perfect for those who love a sweet coffee with a chocolatey twist.","ingredients":["Coffee","Water"],"image":"https://images.pexels.com/photos/15021332/pexels-photo-15021332/free-photo-of-black-coffee-in-cup-in-cozy-decor.jpeg","price":2.5,"id":7,"totalSales":0},
{"title":"Chai Latte","description":"A warm, spiced blend of black tea, steamed milk, and aromatic spices like cinnamon and cardamom. It’s creamy, comforting, and perfect for a cozy treat.","ingredients":["Coffee","Water"],"image":"https://www.teaheritage.fr/cdn/shop/articles/fbfd23eb1812c26fe623eebd7b4a5249.jpg?v=1674638932","price":3,"id":9,"totalSales":1},
{"title":"Matcha Latte","description":"A smooth, earthy drink made with finely ground green tea powder and steamed milk. It’s rich in antioxidants and offers a naturally sweet, slightly grassy flavor.","ingredients":["Coffee","Water"],"image":"https://images.pexels.com/photos/28704749/pexels-photo-28704749/free-photo-of-cozy-matcha-latte-with-autumn-decor-on-rustic-table.jpeg","price":5,"id":10,"totalSales":1},
{"id":5,"title":"Espresso","price":1.2,"description":"A bold, concentrated coffee shot with a rich crema on top. It’s smooth, intense, and the foundation of many coffee drinks.","image":"https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","ingredients":[],"totalSales":1},
{"title":"Hot Chocolate","description":"A rich, creamy beverage made from melted chocolate or cocoa powder, mixed with steamed milk and sweeteners. Often topped with whipped cream or marshmallows, it’s a comforting, indulgent treat.","ingredients":["Chocolate","Hot Water"],"image":"https://images.pexels.com/photos/6119123/pexels-photo-6119123.jpeg","price":1.3,"id":11,"totalSales":0},
{"id":2,"title":"Latte","price":1.3,"description":"A smooth espresso-based drink with steamed milk and a light layer of foam. It’s creamy, mildly sweet, and perfect for a balanced coffee experience.","image":"https://i.imgur.com/L3r6o58.jpeg","ingredients":[],"totalSales":2},
{"id":4,"title":"Cappuccino","price":2,"description":"A bold espresso drink topped with equal parts steamed milk and velvety foam. It’s rich, creamy, and perfect for those who love a strong coffee flavor.","image":"https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","ingredients":[],"totalSales":14}]

*/