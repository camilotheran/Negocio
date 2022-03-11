import React, { Component } from "react";
import { MenuItems } from "./MenuItems"
import "../../Css/NavBar.css"
import { FiMenu, FaTimes, FaCartArrowDown } from "react-icons/all";
import { Button } from 'react-bootstrap';


class NavBar extends Component {
    state = {
        click: false,
    }

    handleClik = () => {
        this.setState({click: !this.state.click})
    }

    render(){
        
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Negocio </h1>
                {/* <IoMedkitOutline className="medkit-icon"/> */}
                <div className="menu-icon" onClick={this.handleClik}>
                    {this.state.click ? <FaTimes className="click-close-icon"/> : <FiMenu className="click-menu-icon"/> }
                </div>
                <ul className={this.state.click ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button className="btn-info" variant="outline-info"><FaCartArrowDown className="carrito-icon"/> Carrito</Button>
                <Button className="btn-info">Sign Up</Button>
            </nav>
        )
    }
}

export default NavBar