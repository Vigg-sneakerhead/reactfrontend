import React, { Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../Card/Card';
import Title from "../Title";
import {ProductConsumer} from "../../context";
import FilterBar from "./FilterBar";
import './ProductPage.css';
import SortByBar from './SortByBar';

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
                    <Container className="py-5">
                        <Title name = "Sneakers"/>
                        <Row className="my-3">
                            <Col lg={3} md={3} xs={12}>
                                <FilterBar/>
                            </Col>
                            <Col lg={9} md={9} xs={12}>
                                <Container>
                                    <Row className="mb-3 ml-3 mx-auto">
                                        <div className = 'align-center justify-content-center text-center my-2'>
                                            <i className="fas fa-search"/>
                                        </div>
                                        <Col>
                                            <form onSubmit={(e) => {
                                                e.preventDefault();
                                                context.FilterSearch(this.state.value);
                                                console.log(this.state.value)
                                            }}>
                                                <input 
                                                    className="form-control form-control-lg form-control-borderless" 
                                                    value={this.state.value} 
                                                    onChange={this.handleChange} 
                                                    type="search" 
                                                    placeholder="Search..."/>
                                            </form>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={3} md={3} xs={3} className = "ml-auto text-right mb-3">
                                            <SortByBar/>
                                        </Col>
                                    </Row>
                                    <Row className ="ml-auto">
                                        <ProductConsumer>
                                            {value => {
                                                return value.products.map(product => {
                                                    // console.log(product)
                                                    return <Card key={product.id} product ={product}/>;
                                                })
                                            }}
                                        </ProductConsumer>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>                    
                </React.Fragment>
                )}
            </ProductConsumer>
        );
    }
}
