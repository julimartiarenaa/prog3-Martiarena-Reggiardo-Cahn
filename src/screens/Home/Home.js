import React from "react";
import "../../Components/Movie/Movie"
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Home.css"
import Movie from "../../Components/Movie/Movie";
import MoviePopulars from "../../Components/MoviePopulars/MoviePopulars";

function Home() {
    return (
        <React.Fragment>
            <Header/> 
            <Movie />
            <MoviePopulars/>
            <Footer/> 
        </React.Fragment>

    )

}

export default Home