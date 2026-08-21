import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
    // Outlet is a placeholder for the child routes , it will render the child route component when the route matches. It is used to render the child routes inside the parent route component.
    return (
        <>
            <Header />
            <Outlet /> 
            <Footer />
        </>
    );
}

export default Layout;