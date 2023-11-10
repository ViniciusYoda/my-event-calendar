import { createBrowserRouter } from "react-router-dom"
import Header from "../components/Header";
import Home from "../pages/home";
import CreateEvent from "../pages/CreateEvent";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/create-event",
                element: <CreateEvent />
            }

        ],
    },
]);