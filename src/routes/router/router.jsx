import { createBrowserRouter } from "react-router-dom";
import Root from "../../rootFiles/Root/Root";
import Home from "../../pages/home/Home/Home";
import Error from "../../pages/shared/Error/Error";
import About from "../../pages/About/About";
import Career from "../../pages/Career/Career";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import NewsDetails from "../../pages/NewsDetails/NewsDetails";
import PrivetRoute from "../privetRoute/PrivetRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: async () => await fetch('/news.json')
            },
            {
                path: '/newsDetails/:id',
                element: <PrivetRoute><NewsDetails /></PrivetRoute>,
                loader: async ({ params }) => {
                    const res = await fetch('/news.json');
                    const allData = await res.json();

                    const data = await allData.find(info => info?._id === params.id)
                    return data;
                }
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/career',
                element: <Career />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    }
])