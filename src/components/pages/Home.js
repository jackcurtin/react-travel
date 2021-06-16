import "../../App.css"
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import React from "react";
import Footer from "../Footer";

function Home () {
    return (
        <React.Fragment>
            <HeroSection/>
            <Cards/>
            <Footer/>
        </React.Fragment>
    )
}

export default Home;
