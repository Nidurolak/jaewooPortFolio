import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from '../pages/Main';
import { styled } from 'styled-components';
import Header from "../components/Header";
import { scroller } from "react-scroll";

const Router = () =>{
    
    const scrollToComponent = (componentId: string) => {
        console.log("asdas")
        scroller.scrollTo(componentId, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          offset: -100,
        });
      };

    return(
        <BrowserRouter>
        <Routes>
            <Route element = {<Main />} path = "/" />
        </Routes>
        <Header scrollToComponent={scrollToComponent}/>
        </BrowserRouter>
    )
}
export default Router;