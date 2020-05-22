import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import sneakericon from './sneakericon.png';
import viggicon from './vigg.png';
import styled from 'styled-components';
import {ButtonContainer} from './button';
import "./index.css";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-blue px-sm-5">
                <Link to='/'>
                    <img src= {viggicon} alt = "viggicon" className="navbar-brand"/>;
                </Link>
            <ul className ="navbar-nav aligh-items-center">
                <li className ="nav-item ml-auto">
                    <Link to ="/" className="nav-link">
                    Products
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
        );
    }
}

