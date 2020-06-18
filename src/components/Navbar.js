import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import sneakericon from './sneakericon.png';
import viggicon from './vigg.png';
import styled from 'styled-components';
import {ButtonContainer} from './button';
import "./components.css";
import {ProductConsumer} from '../context';


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-nav navbar-expand-sm navbar-xs fixed-top" role ="navigation">
             <div className ="container-fluid justify-content-center ">
                <ul className ="navbar-nav">
                    <a href='/'>
                        <img src= {viggicon} alt = "viggicon" className="navbar-homeicon"/>
                    </a>
                
                </ul>
               
                <ul className ="navbar navbar-sneakerscontainer">
                    <li className ="navbar navbar-sneakers  ">
                        <ProductConsumer>
                            {value => (
                                <Link to ="/Productlist" className="text-light font-weight-bold justify-content-center" onClick = {() => {
                                    value.resetState();
                                }}>
                                    MUA GIÀY
                                </Link>
                            )}
                        </ProductConsumer>
                        
                    </li>
                </ul>
                
                <ul className ="navbar navbar-selltitlecontainer">
                    <li className ="navbar navbar-sell">
                        <Link to ="/Sell" className="text-light font-weight-bold justify-content-center" >
                            BÁN GIÀY
                        </Link>
                    </li>
                </ul>
                <ul className ="navbar navbar-blogtitlecontainer mr-5">
                    <li className ="navbar navbar-blog">
                        <Link to ="/gallery" className="text-light font-weight-bold justify-content-center" >
                        PHONG CÁCH
                        </Link>
                    </li>
                </ul>
                
                <ul className ="navbar navbar-login justify-content-center">
                    <li className ="navbar navbar-blog">
                        <Link to ="/gallery" className="text-light" >
                        Log in
                        </Link>
                    </li>
                </ul>
                <Link to='/cart'className ="justify-content-center">
                    <ButtonContainer>
                        <i className="fas fa-cart-plus" />
                        My Cart
                    </ButtonContainer>
                </Link>
              
             </div>
            </nav>
        )
    }
}

