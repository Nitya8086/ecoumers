import React, { Fragment } from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Store from "./Pages/Store";
import Layout from "./component/Layout/Layout";

function App() {
  return (
    <Fragment>
   <BrowserRouter> 
 
   <div>
   <Routes>
    <Route path="/" element = {<Layout/>}>
    <Route index element = {<Home/>}/>  
    <Route path="/store" element = {<Store/>}/>
    <Route path="/about" element = {<About/>}/></Route>
      
   </Routes>
   </div>
   </BrowserRouter>
   </Fragment>
 
  );
}

export default App;
