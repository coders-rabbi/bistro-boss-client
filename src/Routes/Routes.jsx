import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import Root from "../Layout/Root";
import Menu from "../components/Pages/Menu/Menu";
import Order from "../components/Pages/Order/Order";


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
            },
            {
                path: "order",
                element: <Order></Order>
            }
        ]
    },
]);