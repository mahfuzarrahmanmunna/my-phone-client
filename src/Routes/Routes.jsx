import { createBrowserRouter } from "react-router-dom";
import Root from "../Page/Root";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                path: '/phones',
                
            }
        ]
    }
])