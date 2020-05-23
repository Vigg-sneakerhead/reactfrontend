import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import sneakericon from './sneakericon.png';
import viggicon from './vigg.png';
import styled from 'styled-components';
import {ButtonContainer} from './button';
import "./components.css";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-custom" role ="navigation">
                <ul className ="navbar navbar-homeiconcontainer">
                    <Link to='/'>
                        <img src= {viggicon} alt = "viggicon" className="navbar-homeicon"/>
                    </Link>
                </ul>
            <ul className ="navbar navbar-sneakerscontainer">
                <li className ="navbar navbar-sneakers ">
                    <Link to ="/" className="text-light" >
                    Sneakers
                    </Link>
                </li>
            </ul>
            <ul className ="navbar navbar-blogtitlecontainer">
                <li className ="navbar navbar-blog">
                    <Link to ="/blog" className="text-light" >
                    Blog
                    </Link>
                </li>
            </ul>
            <ul className ="navbar navbar-selltitlecontainer">
                <li className ="navbar navbar-sell">
                    <Link to ="/blog" className="text-light" >
                    Bán Giày
                    </Link>
                </li>
            </ul>
            <Link to='/cart'className ="ml-auto">
                <ButtonContainer>
                <i className="fas fa-cart-plus" />
                 My Cart
                </ButtonContainer>
            </Link>
    
            </nav>
        )
    }
}

