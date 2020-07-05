import React, { Component } from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import './Card.css';
import { ProductConsumer } from '../../context';

class card extends Component {
    render () {
    const { id, title, img, price, inCart, New } = this.props.product;
    return(
        <Card>
            <Card.Header>
                {New ?
                (
                    <Container className="labelnew">
                        <p className="mx-auto">
                            New
                        </p>
                    </Container>
                ):(
                    <Container className="labelold">
                        <p className="mx-auto">
                            Old
                        </p>
                    </Container>
                )}
            </Card.Header>
            <ProductConsumer>
                {value => (
                <Card.Body 
                    className="img-container p-5" 
                    onClick={() => value.handleDetail(id)}
                >
                    <Link to="/details">
                        <img src={img} alt="product" className="card-img-top"/>
                    </Link>
                    <div
                        disabled = {inCart} 
                        onClick={()=>{
                            value.addToCart(id)    
                            value.openModal(id)
                    }}>
                        {inCart ? (
                            <p className="text-capitalize mb-0" disabled>
                                In Cart
                            </p>
                        ) : (
                            <svg 
                                className="cart-btn"
                                width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="black" 
                                xmlns="http://www.w3.org/2000/svg" 
                                style={{padding:'0px 5px 0px 5px'}}
                                >
                                    <path fillRule="evenodd" d="M8.5 5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 .5-.5z"/>
                                    <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0v-2z"/>
                                    <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                            </svg>
                        )}
                    </div>
                </Card.Body>
                )}
            </ProductConsumer>
            <Card.Footer className="d-flex justify-content-between">
                <div className="align-self-center mb-0 text-center">
                    {title}
                    <h5 className="text-blue font-italic mb-0">
                        {price.toFixed(3)}
                        <span className="mr-1">.000 đ</span>
                    </h5>
                </div>
            </Card.Footer>
        </Card>
    );
    }
};

export default card;

card.propTypes = { 
    product: PropTypes.shape({ 
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool,
        New:PropTypes.bool,
        size:PropTypes.number,
    }).isRequired
}