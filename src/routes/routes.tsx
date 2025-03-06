import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from '../Screens/Home';
import { ROUTE_HOME, ROUTE_PRODUCTS } from "../utils/constants";
import PageNotFound from "../Screens/PageNotFound/PageNotFound";
import Products from "../Screens/Products";
import BaseLayout from "../components/BaseLayout";


export default function BravuzRoutes() {

    const router = createBrowserRouter([
        {
            path: ROUTE_HOME.route,
            element: (
                <BaseLayout >
                    <HomePage />
                </BaseLayout>
            )
            ,
            errorElement: (<PageNotFound />),
        },
        {
            path: ROUTE_PRODUCTS.route,
            element: (
                <BaseLayout >
                    <Products />
                </BaseLayout>
            )
            ,
            errorElement: (<PageNotFound />),
        },
    ]);


    return <RouterProvider router={router} />;
}
