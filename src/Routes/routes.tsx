import React from "react";
import { Routes, Route } from "react-router-dom"
import { Header } from "../components/header/Header";
import { Favorites } from "../pages/favorites/Favorites";
import { Book } from "../pages/book/Book";
import Home from "../pages/home/Home";

export function Routers() {
    return (
        <Routes>
            <Route path="/home" element={
                <>
                    <Header/> 
                    <Home/>
                </>
            }/>

            <Route path="/favorites" element={
                <>
                    <Header/> 
                    <Favorites/>
                </>
            }/>
            
            <Route path="/book" element={
                <>
                    <Header/> 
                    <Book/>
                </>
            }/>
        </Routes>
    )
}