import { createBrowserRouter } from "react-router-dom";
import Root from "../Page/Root";
import Phones from "../Page/Phones";
import Phone from "../Page/Phone";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                path: '/phones',
                Component: Phones,
                loader: () => fetch('http://localhost:5000/phones'),
                hydrateFallbackElement: <p>Loading data</p>
            },
            {
                path: '/phones/:id',
                Component: Phone,
                loader: ({ params }) => fetch(`http://localhost:5000/phones/${params.id}`),
                hydrateFallbackElement: <p>Loading data</p>
            }
        ]
    }
]);
