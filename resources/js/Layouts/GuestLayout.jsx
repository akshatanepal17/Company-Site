import Footer from "@/Components/custom-components/footer";
import Homenav from "@/Components/custom-components/homenav";
import { Outlet } from "react-router-dom";

export default function GuestLayout({ children }) {
    return (
        <>
            <Homenav/>
            <Outlet/>
            <Footer/>
        </>
    );
}
