import React from "react";
import Header from "./components/Header";
import Count from "./components/Count"
import Calc from "./components/Calc";
import Puzzle from "./components/Puzzle";
import Weather from "./components/Weather";
import BrainCalc from "./components/BrainCalc"
import Education from "./components/Education";
import Education2 from "./components/Education2";
import Education3 from "./components/Education3";
import Education4 from "./components/Education4";
import Education5 from "./components/context/Education5";
import Footer from "./components/footer";
import Profile from "./components/Profile"
import Contact from "./components/Contact";
import Education6 from "./components/Education6";
import Education7 from "./components/Education7";
import Education8 from "./components/Education8";
import NumChance from "./components/NumChance";
import Graph from "./components/NumsChanseGraph";
import CreateGraph from "./components/CreateGreph";
import Snacke from "./components/Snacke";
import APITEST from "./components/EDU.tsx"; 
import Form from "./components/Form.jsx";
function App(){
    return(
        <div>
            <Header/>
            <Form/>
            <Education/>
            <Education2/>
            <Education3/>
            <Education4/>
            <Education6/>
            <Education7/>
            <Education8/>
            <Count/>
            <Calc/>
            <Weather/>
            <Puzzle/>
            <BrainCalc/>
            <div style={{display:"flex", alignItems:"center"}}>
                <NumChance/>
                <Graph/>
            </div>
            <CreateGraph/>
            <Snacke/>
            <APITEST/>
            <Profile/>
            <Footer/>
        </div>
    )
}
export default App