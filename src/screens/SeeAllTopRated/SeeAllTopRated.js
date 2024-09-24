import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AllMoviesTopRated from "../../components/AllMoviesTopRated/AllMoviesTopRated";


function SeeAll(props){
    console.log(props);
    
    return(
        <React.Fragment> 
            <Header/>
            <AllMoviesTopRated/>
            <Footer/>
        </React.Fragment>
    )
}

export default SeeAll