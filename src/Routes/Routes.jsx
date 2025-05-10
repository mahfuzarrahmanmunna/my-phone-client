import { createBrowserRouter } from "react-router-dom";
import Root from "../Page/Root";
import Phone from "../Page/Phone";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                path: '/phones',
                Component: Phone,
                loader: () => fetch('http://localhost:5000/phones')
            }
        ]
    }
])