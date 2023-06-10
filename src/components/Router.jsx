import React from "react";
import About from "../pages/About";
import Posts from "../pages/Posts";
import {BrowserRouter, Route, Routes, Outlet} from 'react-router-dom';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Router() {
    const Layout = () => {
        return (
            <>
                <Header/>
                <Outlet/>
                <Footer/>
            </>
        )
    }

    const BrowserRoutes = () => {
        return(
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Layout/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/posts" element={<Posts/>}/>
                </Routes>
            </div>
        </BrowserRouter>
        );
    }

    return (
        <BrowserRoutes/>
    );
}