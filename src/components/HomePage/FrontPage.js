import React, { Component } from 'react';
import styled from 'styled-components';
import frontpageicon from './frontpageicon.png';
import { Container, Row, Col } from 'react-bootstrap';
import './FrontPage.css';
import Carousel from '../Carousel/Carousel';

export default class FrontPage extends Component {
    render() {
        return (
            <React.Fragment>
                <FrontPageContainer>
                    <Container>
                        <Row>
                            <div id = "icon" className ="mx-auto">
                                <img alt="icon" src ={frontpageicon} className ="image-icon"></img>
                            </div>
                        </Row>    
                        <Row className="row-title">
                            <div id = "title" className='mx-auto'>
                                <h2>CHỌN ĐÔI SNEAKERS BẠN MƠ ƯỚC</h2>
                            </div>
                        </Row>          
                        <Row className="align-items-center">
                            <Col lg={1} md={2} sm={2} xs={2} className='search-icon text-light'>
                                <i className="fas fa-search"/>
                            </Col>
                            <Col lg={11} md={10} sm={10} xs={10}>
                                <input 
                                    className="form-control form-control-lg form-control-borderless" 
                                    type="search" 
                                    placeholder="Sneakers, brand, designer..."
                                />
                            </Col>
                        </Row>         
                        <Row className ="mx-auto text-light">
                            <div id = "title" className ="best-seller-title mr-auto">
                                <h2>BESTSELLERS TRÊN VIGG</h2>
                            </div>
                        </Row>
                        <Carousel condition="New"/>
                        <Row className ="mx-auto text-light">
                            <div id = "title" className ="best-seller-title mr-auto">
                                <h2>DEAL GIÀY TRÊN VIGG</h2>
                            </div>
                        </Row>    
                        <Carousel condition="Old"/>
                    </Container>
                </FrontPageContainer>
            </React.Fragment>
        )
    }
}
const FrontPageContainer = styled.div`
    position:relative; 
    top:0;
    left:0;

    background:rgba(0,0,0,0.3);
    display:flex;

    #searchbar {
        color:var(--mainWhite);
    }
`