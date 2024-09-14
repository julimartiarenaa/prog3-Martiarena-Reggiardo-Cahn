import React from "react";
import "../../Components/Movie/Movie"
import HomeHeader from "../../Components/HomeHeader/HomeHeader";
import "./Home.css"
import Movie from "../../Components/Movie/Movie";

function Home() {
    return (
        <React.Fragment>
            <HomeHeader/> 
            <Movie />
        </React.Fragment>

    )

}

export default Home