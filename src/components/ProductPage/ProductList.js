import React, { Component } from 'react';
import Product from "./Product";
import Title from "../Title";
import {ProductConsumer} from "../../context";
import FilterBar from "./FilterBar";

export default class ProductList extends Component {

    render() {
        return (
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
                                           SORT BY
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
            </React.Fragment>
                
        );
    }
}
