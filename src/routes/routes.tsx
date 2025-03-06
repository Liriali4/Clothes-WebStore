import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from '../Screens/Home';
import { ROUTE_HOME, ROUTE_PRODUCTS } from "../utils/constants";
import PageNotFound from "../Screens/PageNotFound/PageNotFound";
import Products from "../Screens/Products";


export default function BravuzRoutes() {

    const router = createBrowserRouter([
        {
            path: ROUTE_HOME.route,
            element: (
                <HomePage />
            )
            ,
            errorElement: (<PageNotFound />),
        },
        {
            path: ROUTE_PRODUCTS.route,
            element: (
                <Products />
            )
            ,
            errorElement: (<PageNotFound />),
        },
    ]);


    return <RouterProvider router={router} />;
}
