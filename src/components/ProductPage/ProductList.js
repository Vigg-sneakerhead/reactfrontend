import React, { Component, PureComponent} from 'react';
import Product from "./Product";
import Title from "../Title";
import {ProductConsumer} from "../../context";
import FilterBar from "./FilterBar";
import './ProductPage.css';
import SortByBar from './SortByBar';
import Footer from '../HomePage/Footer/Footer';

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
    render() {
       
        return (
       
             <ProductConsumer>
                 {context => (
                  <React.Fragment>
                    <div className = "py-5">
                        <div className="container">                    
                            <Title name = "Sneakers"/>
                            <div className = "row my-3">
                                <div className ="col-lg-3 col-md-3 col-xs-12">
                                    <FilterBar/>
                                </div>
                                <div className = "col-lg-9 col-md-9 col-xs-12">
                                    <div className = "container">
                                        <div className="row mb-3 ml-3 mx-auto">
                                                <div className = 'align-center justify-content-center text-center my-2'>
                                                    <i class="fas fa-search"/>
                                                </div>
                                    
                                                <div class="col">
                                                    <form onSubmit={(e) => {
                                                        e.preventDefault();
                                                        context.FilterSearch(this.state.value);
                                                        console.log(this.state.value)
                                                        }}>
                                                        <input class="form-control form-control-lg form-control-borderless" value={this.state.value} onChange={this.handleChange} type="search" placeholder="Search..."/>
                                                    </form>
                                                    
                                                </div>
                                        </div>
                                        <div className="row">
                                            <div className = "col-lg-3 col-md-3 col-xs-3 ml-auto text-right">
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
