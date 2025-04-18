import React from "react";
import * as ReactDOMClient from 'react-dom/client'
import App from "./App";
import './css/App.css'
import ContextProvider from './components/context/Education5'
import NumContextProvider from "./components/context/ContextGraph";

var app=ReactDOMClient.createRoot(document.getElementById("root"))

app.render(
    <ContextProvider>
    <NumContextProvider>
    <App/>
    </NumContextProvider>
    </ContextProvider>
)