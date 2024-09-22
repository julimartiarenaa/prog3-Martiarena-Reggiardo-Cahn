import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import AllMovies from "../../Components/AllMovies/AllMovies";
import Filter from "../../Components/Filter/Filter"


function SeeAll(){
    return(
        <React.Fragment> 
            <Header/>
            <Filter />
            <AllMovies/>
            <Footer/>
        </React.Fragment>
    )
}

export default SeeAll