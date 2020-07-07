import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './ProfilePage.css'

export default class ProfilePage extends Component {

    render() {
        let profilebox = (
            <>
                <Row>
                    <div className ="mx-auto mt-5">
                        <img  src="assets/images/profile/profilepic.png"
                            style={{ objectFit:'contain', height: '50%', width: '50%'}}
                            className ="rounded-circle" 
                        />
                        <div className ="mx-auto my-2">
                             An Cao
                        </div> 
                        <button className ="mx-auto">
                            Change profile picture
                        </button>
                    </div>   
                </Row>
                <Row className ="p1 mt-2">
                  <span className ="mx-auto my-2">Đơn hàng của tôi </span>
                </Row>
                <Row className ="p2"> 
                    <span className ="mx-auto my-2">Tài khoản của tôi </span>
                </Row>
                <Row className ="p3 mb-2"> 
                    <span className ="mx-auto my-2">Cài đặt </span>
                </Row>
            </>
            )
        return (
            <Container style ={{paddingTop:'2cm'}}>
                <Row className ="text-center mb-0">
                    <Col lg ={3} className ="mx-auto profilebox">
                        {profilebox}
                    </Col>
                    <Col lg ={8} className = "ml-3">
                        hello2
                    </Col>
                </Row>
            </Container>
        )
    }
}
