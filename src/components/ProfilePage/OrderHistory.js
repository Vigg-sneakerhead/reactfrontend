import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

export default class OrderHistory extends Component {
    render() {
        return (
        <div>
         <Row className ='orderinfo mr-1 text-center'>
            <Col lg ={3} >
                <div>Order placed:</div>
                <div>{this.props.date}</div>
            </Col>
            <Col lg ={3} >
                <div>Total:</div>
                <div>{this.props.price}</div> 
            </Col>
            <Col lg ={3} >
                <div>Ship to:</div>
                <div>{this.props.receiver}</div>
            </Col>
            <Col lg ={3} >
                Order code:
            </Col>
            
         </Row>
         <Row>
            <Col lg ={4} >
                <img  src="assets/images/profile/OrderedProducts/product-1.jpg"
                            style={{ objectFit:'contain', height: '100%', width: '100%'}}
                        />
            </Col>
            <Col lg ={8} className ="my-3">
                <span className ="font-weight-bold">{this.props.title}</span>
            </Col>
         </Row>
        </div>
        
           
        )
    }
}
