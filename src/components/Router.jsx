import React, { createContext, useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Outlet, useLocation } from "react-router-dom";
import Comitet from "../pages/Comitet";
import Posts from "../pages/Posts";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PostIdPage from "../pages/PostIdPage";
import Homepage from "../pages/HomePage";
import Contacts from "../pages/Contacts";
import NotFoundPage from "../pages/NotFoundPage";

// Создаем контекст для хранения состояния ошибки 404
const NotFoundContext = createContext(false);

export default function Router() {
    const isntStickyFooterPages = ['/','/posts', '/contacts']; // Укажите здесь страницы, на которых футер будет липким

    const Layout = () => {
        const currentLocation = useLocation();
        const isSticky = isntStickyFooterPages.includes(currentLocation.pathname);

        // Получаем значение состояния ошибки 404 из контекста
        const isNotFound = useContext(NotFoundContext);

        return (
            <>
                <Header />
                <Outlet />
                {isSticky ? <Footer isStickyFooter={false}/> : <Footer isStickyFooter={(currentLocation.pathname === "/404" || isNotFound)} />}
            </>
        );
    };

    const NotFoundWrapper = () => {
        // Устанавливаем состояние ошибки 404 в контексте
        const setNotFound = useContext(NotFoundContext)[1];
        useEffect(() => {
            setNotFound(true); // Устанавливаем значение ошибки 404 в true

            return () => {
                setNotFound(false); // Устанавливаем значение ошибки 404 в false при размонтировании компонента
            };
        }, []);

        return <NotFoundPage />;
    };

    const BrowserRoutes = () => {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Homepage />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/comitet" element={<Comitet />} />
                        <Route path="/posts" element={<Posts />} />
                        <Route path="/posts/:id" element={<PostIdPage />} />
                        <Route path="*" element={<NotFoundWrapper />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    };

    // Используем хук useState для хранения состояния ошибки 404
    const [isNotFound, setNotFound] = useState(false);

    return (
        <NotFoundContext.Provider value={[isNotFound, setNotFound]}>
            <BrowserRoutes />
        </NotFoundContext.Provider>
    );
}
