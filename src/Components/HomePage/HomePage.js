import React from "react";
import NavHeader from "../NavHeader/NavHeader";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import Pagination from "../Pagination/Pagination";

function HomePage(){
    return(
        <>
            <NavHeader />
            {/* <h2>This is Home page of app.</h2> */}
            <Content />
            <Pagination />
            <Footer />
        </>
    )
}

export default HomePage;