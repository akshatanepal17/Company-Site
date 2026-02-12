import GuestLayout from "@/Layouts/GuestLayout";
import About from "@/Pages/About";
import Career from "@/Pages/Careers";
import Contact from "@/Pages/Contact";
import Portfolio from "@/Pages/Portfolio";
import Welcome from "@/Pages/Welcome";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const MyRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <GuestLayout />,
            children: [
                {
                    path: "/",
                    element: <Welcome />,
                },
                {
                    path: "/about",
                    element: <About />,
                },
                {
                    path: "/portfolio",
                    element: <Portfolio />,
                },
                {
                    path: "/contact",
                    element: <Contact />,
                },
                {
                    path: "/careers",
                    element: <Career />,
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
};

export default MyRouter;
