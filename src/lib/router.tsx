import {createBrowserRouter} from "react-router-dom";
import App from "@/routes/App.tsx";
import Login from "@/routes/login/index.tsx";
import AuthRoot from "@/layouts/auth_root.tsx";
import Components from "@/routes/components";
import Tickets from "@/routes/tickets";
import AppRoot from "@/layouts/app_root";

const router = createBrowserRouter([

    {
        path: "/components",
        element: <Components/>,
    },
    {
        path: "/",
        element: <AppRoot/>,
        children: [
            {
                path: "tickets",
                element: <Tickets/>,
            },
            {
                path: "/",
                element: <App/>,
            },
        ],
    },
    {
        path: "/",
        element: <AuthRoot/>,
        children: [
            {
                path: "login",
                element: <Login/>,
            }
        ],
    },
]);

export default router;
