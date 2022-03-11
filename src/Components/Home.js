import React, { Component } from "react";
import NavBar from "./NavBar/NavBar"
import Body from "./Body/Body";
import Footer from "./Footer";


class Home extends Component {
    render(){
        
        return(
            <>
                <NavBar /> 
                <Body />
                <Footer />
            </>
        )
    }
}

export default Home