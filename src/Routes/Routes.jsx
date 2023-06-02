import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import Root from "../Layout/Root";
import Menu from "../components/Pages/Menu/Menu";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            }
        ]
    },
]);