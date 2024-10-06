import React from "react";
import NavHeader from "../NavHeader/NavHeader";
import Content from "../Content/Content";

function HomePage(){
    return(
        <>
            <NavHeader />
            {/* <h2>This is Home page of app.</h2> */}
            <Content />
        </>
    )
}

export default HomePage;