import GuestLayout from "@/Layouts/GuestLayout";
import About from "@/Pages/About";
import Login from "@/Pages/Auth/Login";
import Register from "@/Pages/Auth/Register";
import Career from "@/Pages/Careers";
import Contact from "@/Pages/Contact";
import Portfolio from "@/Pages/Portfolio";
import Welcome from "@/Pages/Welcome";
import AdminLayout from "@/Pages/admin/layout/AdminLayout";
import BlogPage from "@/Pages/admin/pages/BlogPage";
import DashboardPage from "@/Pages/admin/pages/DashboardPage";
import ProfilePage from "@/Pages/admin/pages/ProfilePage";
import ProjectPage from "@/Pages/admin/pages/ProjectPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const MyRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <GuestLayout />,
            children: [
                { path: "/", element: <Welcome /> },
                { path: "/about", element: <About /> },
                { path: "/portfolio", element: <Portfolio /> },
                { path: "/contact", element: <Contact /> },
                { path: "/careers", element: <Career /> },
                { path: "/login", element: <Login /> },
                { path: "/register", element: <Register /> },
            ],
        },
        {
            path: "/admin",
            element: <AdminLayout />,
            children: [
                { index: true, element: <DashboardPage /> },
                { path: "dashboard", element: <DashboardPage /> },
                { path: "users", element: <div className="p-8">Users</div> },
                { path: "blog", element: <BlogPage /> },
                { path: "project", element: <ProjectPage /> },
                { path: "profile", element: <ProfilePage /> },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default MyRouter;
