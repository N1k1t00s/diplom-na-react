import { useLocation } from "react-router-dom";
import React from "react";

const NotFoundPage = () => {
    const location = useLocation();

    return (
        <div className="not-found">
            <h1>404 - Страница не найдена</h1>
            <h3>Страницы по адресу "{location.pathname}" не существует.</h3>
        </div>
    );
}

export default NotFoundPage;