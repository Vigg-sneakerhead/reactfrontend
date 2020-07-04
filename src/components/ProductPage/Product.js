import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {ProductConsumer} from "../../context";
import PropTypes from "prop-types";
import './Product.css';

export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart, New } = this.props.product;
        return (
            <Card>
                <ProductConsumer>
                    {value => ( 
                        <div 
                            className ="img-container p-5" 
                            onClick = {() => value.handleDetail(id)}
                        >
                            <Link to='/details'>
                                <img src={img} alt = "product" className ="card-img-top"/>
                            </Link>
                            <button 
                                className = "cart-btn" 
                                disabled = {inCart?true:false} 
                                onClick={()=>{
                                    value.addToCart(id)    
                                    value.openModal(id)
                                }}
                            >
                                {inCart?(
                                <p className="text-capitalize mb-0" disabled>
                                    in Cart
                                </p>
                                ):(
                                <i className="fas fa-cart-plus"/>)}
                            </button>
                            <div 
                                disabled = {New?true:false} 
                            >
                                {New?(
                                    <div  className = "container labelnew mx-auto justify-content-center " disabled>
                                        <p className="text-capitalize mx-auto text-center align-middle" >New</p>
                                    </div>
                                ):(
                                    <div  className = "container labelold mx-auto justify-content-center " disabled>
                                        <p className="text-capitalize mx-auto text-center align-middle">Second-hand</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </ProductConsumer>
                <div className="card-footer d-flex justify-content-between">
                    <div className ="align-self-center mb-0 text-center">
                        {title}
                        <h5 className ="text-blue font-italic mb-0">
                            {price.toFixed(3)}
                            <span className = "mr-1">.000 đ</span>          
                        </h5>
                    </div>  
                </div>
            </Card>
        )
    }
}

Product.propTypes = { 
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

