import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import AllMovies from "../../Components/AllMovies/AllMovies";


function SeeAll(){
    return(
        <React.Fragment> 
            <Header/>
            <AllMovies/>
            <Footer/>
        </React.Fragment>
    )
}

export default SeeAll