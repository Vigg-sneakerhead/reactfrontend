import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {ProductConsumer} from "../context";
import {ProductWrapper} from './ProductPage/Product';

export default class ProductCarousel extends Component {
    render() {
        const {id, title,img,price,New} = this.props.product;
        return (
            <ProductWrapper className ="col-lg-12 col-md-12 col-sm-12 col-xs-12 my-3">
                <div className="card">
                    <ProductConsumer>
                        {value => ( 
                        <div 
                            className ="img-container p-5" 
                            onClick = {() => value.handleDetail(id)}
                        >
                            <Link to='/details'>
                                <img src={img} alt = "product" className ="card-img-top"/>
                            </Link>
                            <div disabled = {New?true:false}>
                                {New?(
                                    <div  className = "container labelnew mx-auto justify-content-center " disabled>
                                        <p className="text-capitalize mx-auto text-center align-middle">New</p>
                                    </div>
                                ):(
                                    <div  className = "container labelold mx-auto justify-content-center " disabled>
                                        <p className="text-capitalize mx-auto text-center align-middle" >Second-hand</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        )}
                    </ProductConsumer>
                    <div className="card-footer d-flex justify-content-between">
                          <div className ="align-self-center text-center">
                              {title}
                              <h5 className ="text-blue font-italic mb-0">
                                {price.toFixed(3)}
                                  <span className = "mr-1">
                                      .000 đ
                                  </span>
                              </h5>
                          </div>  
                    </div>
                </div>
            </ProductWrapper>
                
        )
    }
}