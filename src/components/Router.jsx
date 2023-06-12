import React from "react";
import NotFoundPage from "../pages/NotFoundPage"
import {BrowserRouter, Route, Routes, Outlet, Navigate, useRouteError} from 'react-router-dom';
import About from "../pages/About";
import Posts from "../pages/Posts";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PostIdPage from "../pages/PostIdPage";
import Homepage from "../pages/HomePage";

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
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<Homepage/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/posts" element={<Posts/>}/>
                        <Route path="/posts/:id" element={<PostIdPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }

    return (
        <BrowserRoutes/>
    );
}