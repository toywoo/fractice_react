import React from "react"
import {HashRouter, Route} from "react-router-dom";
import About from "./Routes/About";
import Home from "./Routes/Home";
import Navigation from "./components/Navigation";
import "./App.css";
import Detail from "./Routes/Detail";

function App(){

  return (<HashRouter>
      <Navigation />
        <Route path = "/"  exact = {true} component = {Home} />
        <Route path = "/about" component = {About} />
        <Route path = "/movie-detail" component ={Detail} />
    </HashRouter>);
}


export default App