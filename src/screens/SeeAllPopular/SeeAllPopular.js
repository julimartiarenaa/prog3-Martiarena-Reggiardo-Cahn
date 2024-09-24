import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AllMoviesPopular from "../../components/AllMoviesPopular/AllMoviesPopular"


function SeeAll(props){
    console.log(props);
    
    return(
        <React.Fragment> 
            <Header/>
            <AllMoviesPopular/>
            <Footer/>
        </React.Fragment>
    )
}

export default SeeAll