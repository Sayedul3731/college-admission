
import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home/Home";
import College from "../Pages/College";
import Admission from "../Pages/Admission";
import MyCollege from "../Pages/MyCollege";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/college",
                element: <College />
            },
            {
                path: "/admission",
                element: <Admission />
            },
            {
                path: "/my-college",
                element: <MyCollege />
            }
        ]
    },
    {
        path: "about",
        element: <div>About</div>,
    },
]);
export default router;