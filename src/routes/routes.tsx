import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from '../Screens/Home';
import { ROUTE_HOME } from "../utils/constants";
import PageNotFound from "../Screens/PageNotFound/PageNotFound";


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
    ]);


    return <RouterProvider router={router} />;
}
