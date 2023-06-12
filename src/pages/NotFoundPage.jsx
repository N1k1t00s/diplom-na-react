import { useLocation } from "react-router-dom";
import React from "react";

const NotFoundPage = () => {
    const location = useLocation();

    return (
        <div className="not-found">
            <h1>404 - Страница не найдена</h1>
            <p>Страница по адресу "{location.pathname}" не существует.</p>
        </div>
    );
}

export default NotFoundPage;