import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import DetailMini from "../../Components/DetailMini/DetailMini";

function Detail(props) {
    return(
        <React.Fragment>
            <Header/>
            <DetailMini  id={props.match.params.id}/>
            <Footer/>
        </React.Fragment>
    )
    
}

export default Detail;

