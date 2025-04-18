import React, { useEffect,useRef }from "react";
import  {useState} from "react";

function Weather(){
    var inputRef=useRef()
   var [weatherData,setweatherData]=useState(false);
   var allIcons = {
    "01d": "https://openweathermap.org/img/wn/01d@2x.png",
    "01n": "https://openweathermap.org/img/wn/01n@2x.png",
    "02d": "https://openweathermap.org/img/wn/02d@2x.png",
    "02n": "https://openweathermap.org/img/wn/02n@2x.png",
    "03d": "https://openweathermap.org/img/wn/03d@2x.png",
    "03n": "https://openweathermap.org/img/wn/03n@2x.png",
    "04d": "https://openweathermap.org/img/wn/04d@2x.png",
    "04n": "https://openweathermap.org/img/wn/04n@2x.png",
    "09d": "https://openweathermap.org/img/wn/09d@2x.png",
    "09n": "https://openweathermap.org/img/wn/09n@2x.png",
    "10d": "https://openweathermap.org/img/wn/10d@2x.png",
    "10n": "https://openweathermap.org/img/wn/10n@2x.png",
    "13d": "https://openweathermap.org/img/wn/13d@2x.png",
    "13n": "https://openweathermap.org/img/wn/13n@2x.png",
    };
    var search=async(city)=>{
        if(city===""){
            alert("Enter city name")
            return;
        }
        try {
            var url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
            var response=await fetch(url);
            var data=await response.json();
            console.log(data);
            if(!response.ok){
                alert(data.message);
                return;
            }
            var icon=allIcons[data.weather[0].icon] || clear_icon;
           setweatherData({
                humidity:data.main.humidity,
                windSpeed:data.wind.speed,
                temperature:Math.floor(data.main.temp),
                location:data.name,
                icon:icon,
            })
            
        } catch (error) {
            setweatherData(false);
            console.error("Error in fetching weather data")
        }
        console.log(data);
    }
    useEffect(()=>{
        search("London");
    },[])
    return(
        <div className="Cont">
            <div className="weather_block">
                <div className="inp_search">
                    <input ref={inputRef} placeholder="City"></input>
                    <img onClick={()=>search(inputRef.current.value)} className="img_searhc" src="src/img/search.png" alt="Weather"></img>
                </div>
                {weatherData?<>
                    <img className="General_img" src={weatherData.icon} alt="Weather"></img>
                <h1 className="City">{weatherData.location}</h1>
                <p className="temperature">{weatherData.temperature} °C</p>
                <div className="wind_wet">
                    <div className="wind">
                        <img className="img" src="src/img/humidity.png" alt="humidity"></img>
                        <p>{weatherData.humidity}%</p>
                        <span>Humidity</span>
                    </div>
                    <div className="wind">
                        <img className="img" src="src/img/wind.jpg" alt="Wind speed"></img>
                        <p>{weatherData.windSpeed}km/h</p>
                        <span>Wind speed</span>
                    </div>
                </div>
                </>:<></>}
                
            </div>
        </div>
    )
}
export default Weather