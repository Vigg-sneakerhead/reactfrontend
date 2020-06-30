import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from "../../context";
import PropTypes from "prop-types";

export default class Product extends Component {
    render() {
        const {id, title,img,price,inCart,New} = this.props.product;
        return (
            <ProductWrapper className ="col-6 col-md-6 col-lg-4 my-3 mr-0">
                <div className="card">
                  <ProductConsumer>
                    {value => ( 
                    
                     <div className ="img-container p-5" 
                     onClick = {() => value.handleDetail(id)}>
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
                                <p className="text-capitalize mx-auto text-center align-middle" >
                                New
                                </p>
                               </div>
                            ):(
                                <div  className = "container labelold mx-auto justify-content-center " disabled>
                                <p className="text-capitalize mx-auto text-center align-middle" >
                                Second-hand
                                </p>
                               </div>
                            
                             )}
                        </div>
                     </div>)}
                   
                  </ProductConsumer>
                    <div className="card-footer d-flex justify-content-between">
                          <p className ="align-self-center mb-0 text-center">
                              {title}
                              <h5 className ="text-blue font-italic mb-0">
                                  {price.toFixed(3)}
                                  <span className = "mr-1">
                                      .000 đ
                                  </span>
                                 
                              </h5>
                          </p>  
                    </div>
                </div>
            </ProductWrapper>
                
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
export const ProductWrapper = styled.div`
.card {
    border-color:transparent;
    transition: all 1s linear;
    border: 0.01rem solid rgba(0,0,0,0.2);
}  
.card-footer{
    background:transparent;
    border-top: transparent; 
    transition: all 1s linear; 
}
&:hover {
    .card {
        border: 0.04rem solid rgba(0,0,0,0.5);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);   
        }
    .card-footer{
        background:rgba(247,247,247);
        }
}
.img-container{
        position:relative;
        overflow:hidden;
}
.card-img-top {
    transition: all 1s linear;
}
.img-container:hover .card-img-top {
    transform:scale(1.1);
}
.cart-btn {
    position:absolute;
    bottom: 0;
    right: 0;
    padding:0.2rem 0.4rem;
    background:var(--lightBlue);
    border:none;
    color: var(--mainWhite);
    font-size:1.4rem;
    border-radius:0.5rem 0 0 0;
    transform: translate(100%,100%);
    transition: all 0.5s linear;
}
.img-container: hover .cart-btn{
    transform:translate(0,0);
}

.cart-btn:hover {
    color:var (--mainBlue);
    cursor: pointer;
}
.labelnew {
    position:absolute;
    top: 0;
    left: 0;
    background:var(--mainYellow);
    border:none;
    color: var(--mainWhite);
    font-size:1.3rem;
    border-radius:0 0 0 0;
    transition: all 0.5s linear;

}
.labelnew:hover {
    color:var(--mainDark);
    cursor:pointer
}
.labelold {
    position:absolute;
    top: 0;
    left: 0;
    background:var(--mainRed);
    border:none;
    color: var(--mainWhite);
    font-size:1.3rem;
    border-radius:0 0 0 0;
    transition: all 0.5s linear;

}
.labelold:hover {
    color:var(--mainDark);
    cursor:pointer
}
`;
