import React, { Component, PureComponent} from 'react';
import Product from "./Product";
import Title from "../Title";
import {ProductConsumer} from "../../context";
import FilterBar from "./FilterBar";
import './ProductPage.css';
import SortByBar from './SortByBar';
import Footer from '../HomePage/Footer/Footer';

export default class ProductList extends Component {

    render() {
        return (
       
             <ProductConsumer>
                 {value => (
                  <React.Fragment>
                    <div className = "py-5">
                        <div className="container">
                            
                            <Title name = "Sneakers"/>
                            <div className = "row">
                                <div className ="col-lg-3 col-md-3 col-xs-12">
                                    <FilterBar/>
                                </div>
                                <div className = "col-lg-9 col-md-9 col-xs-12">
                                    <div className = "container">
                                        <div className="row">
                                            <div className = "col-lg-3 col-md-3 col-xs-3 ml-auto text-center">
                                            <SortByBar/>
                                            </div>
                                        </div>
                                        <div className ="row">
                                            <ProductConsumer>
                                                {value => {
                                                    return value.products.map(product => {
                                                        return <Product key={product.id} product ={product}/>;
                                                    })
                                                }}
                                            </ProductConsumer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <Footer/>
                  </React.Fragment>
                )}
              </ProductConsumer>
           
                
        );
    }
}
