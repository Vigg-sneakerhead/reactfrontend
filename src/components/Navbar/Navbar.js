import React, { Component } from 'react';
import viggicon from './vigg.png';
import "./Navbar.css";
import {ProductConsumer} from '../../context';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";

export default class NavbarClass extends Component {
    render() {
        return (
            <Navbar fluid="false" collapseOnSelect fixed="top" className="navbar" expand='lg'>
                <Navbar.Brand>
                    <Link className ='my-auto' to="/">
                        <img alt="Vigg Icon" src={viggicon} className="navbar-brand justify-content-center"/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle>
                    <svg className="bi bi-justify" width="2em" height="2em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav className="mx-auto">  
                        <NavItem className="nav-text">
                            <ProductConsumer>
                                {value => ( 
                                <Link to="/product-page" onClick = {()=> {value.resetState();}} style={{color: 'white', textDecoration: 'none'}}> Mua Giày </Link>
                                )}
                            </ProductConsumer>
                            
                        </NavItem>
                        <NavItem className="nav-text">
                            <Link to="/sell" style={{color: 'white', textDecoration: 'none'}}> Bán Giày </Link>
                        </NavItem>
                        
                        <NavItem className="nav-text">
                            <Link to="/gallery" style={{color: 'white', textDecoration: 'none'}}> Style </Link>
                        </NavItem>
                        <NavItem>
                            <LinkContainer to="/how-to-sell">
                                <Button variant="outline-secondary" className="nav-text how-to-sell-btn">
                                    Trở thành seller
                                </Button>
                            </LinkContainer>
                        </NavItem>
                    </Nav>
                    <Nav className="nav-icons">
                        <NavItem className="nav-profile">
                            <Link to="/login" style={{color: 'white', textDecoration: 'none'}}> Log in </Link>
                        </NavItem>
                        <LinkContainer to="/cart">
                            <div className="nav-icon">
                                <svg className="bi bi-cart-plus" width="4em" height="4em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg" style={{padding:'0px 20px 0px 20px'}}>
                                    <path fillRule="evenodd" d="M8.5 5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 .5-.5z"/>
                                    <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0v-2z"/>
                                    <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                </svg>
                            </div>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

