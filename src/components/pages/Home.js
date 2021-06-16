import "../../App.css"
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import React from "react";

function Home () {
    return (
        <React.Fragment>
            <HeroSection/>
            <Cards/>
        </React.Fragment>
    )
}

export default Home;
