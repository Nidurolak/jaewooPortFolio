import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from '../pages/Main';
import { styled } from 'styled-components';
import Header from "../components/Header";

const Router = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route element = {<Main />} path = "/" />
        </Routes>
        <Header/>
        </BrowserRouter>
    )
}
export default Router;