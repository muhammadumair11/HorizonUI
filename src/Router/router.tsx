// React Router
import { RouteObject, createBrowserRouter } from "react-router-dom";

// Components
import HomePage from "../Pages/HomePage/Index.js";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <HomePage />,
    },
];

export const router = createBrowserRouter(routes);
