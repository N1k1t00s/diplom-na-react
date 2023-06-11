import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div id="error-page">
            <h1>Упс!</h1>
            <p>Вы перешли на несуществующую страницу.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}