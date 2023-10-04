import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();

    return (
        <div id="error-page" className="text-center space-y-4">
            <h1 className="text-5xl">Oops!</h1>
            <h1 className="text-5xl text-red-500">404</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link className="btn btn-link">Back to home</Link>
        </div>
    );
}

export default Error;