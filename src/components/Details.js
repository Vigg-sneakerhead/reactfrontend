import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './button';
import './components.css';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, Brand, img, info, price, title, inCart } = value.detailProduct;
                    return(
                        <div className ="container py-5">
                            <div className ="row">
                                <div className = "col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            
                                <div className = "col-10 mx-auto text-center col-md-6 my-3 ">
                                   <img src = {img} className ="image-detail" alt ="product"/> 
                                </div>
                           
                          
                                <div className = "col-10 mx-auto text-center col-md-6 my-3 text-capitalize">
                                    <h2>model: {title}</h2>
                                    <h4 className ="text-title text-uppercase text-muted mt-3 mb-2">
                                        Brand: <span className = "text-uppercase">
                                            {Brand}
                                        </span>
                                    </h4>
                                    <h4 className ="text-blue">
                                        <strong>
                                            {price.toFixed(3)}
                                            <span className = "mr-1">
                                                .000 đ
                                            </span>
                                        </strong>
                                    </h4>
                                    <div className = "text-capitalize font-weight-bold mt-3 mb-0">
                                        <p className = "text-muted lead">
                                            info: {info}
                                        </p>
                                    </div>  
                                    <div>
                                        <Link to='/product-page'> 
                                            <ButtonContainer onClick = {()=>{
                                                value.resetState();
                                            }}>
                                                back to sneakers 
                                            </ButtonContainer>      
                                        </Link>
                                        <ButtonContainer 
                                            Cart
                                            disabled = {inCart?true:false}
                                            onClick = {()=> {
                                                value.addToCart(id)
                                                value.openModal(id)
                                            }}
                                            >
                                                {inCart ? "inCart" : "add to cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }}
            </ProductConsumer>
        );
    }
}
