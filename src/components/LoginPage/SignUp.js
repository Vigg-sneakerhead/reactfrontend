import React, { Component } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import{Link} from 'react-router-dom';
import viggicon from '../vigglogo2.png';
import './SignUp.css';

export default class SignUp extends Component {
    render() {
        return (
            <Container>
                <Col lg={4} md={6} className="signuppanel mx-auto col-8 p-2">
                    <Form>
                        <div className = "text-center mb-4">
                            <img alt="Vigg Icon" src={viggicon} className="logologin justify-content-center"/>
                        </div>

                        <div className="form-group">
                            <label className ="font-weight-bold">Họ và Tên</label>
                            <input type="text" className="form-control" placeholder="ex. Vương Hữu Nam" />
                        </div>

                        <div className="form-group">
                            <label className ="font-weight-bold">Số điện thoại</label>
                            <input type="text" className="form-control" placeholder="ex: 0951234823" />
                        </div>

                        <div className="form-group">
                            <label className ="font-weight-bold">Email</label>
                            <input type="email" className="form-control" placeholder="ex. vigg@gmail.com" />
                        </div>

                        <div className="form-group">
                            <label className ="font-weight-bold">Password</label>
                            <input type="password" className="form-control" placeholder="ex. namvuong296" />
                        </div>
                        <div className="form-group">
                            <label className ="font-weight-bold">Địa chỉ</label>
                            <input type="password" className="form-control" placeholder="ex. 12, Trung Lang, Quận Tân Bình" />
                        </div>
                        <div className="form-group">
                            <label className ="font-weight-bold">Số CMND</label>
                            <input type="password" className="form-control" placeholder="ex. 123456789999" />
                        </div>

                        <Button className="signup-btn"variant="primary" type="submit" style={{"width":"100%"}}>
                            Sign Up
                        </Button>
                        <Row className="my-5">
                            <Col className="text-center">
                                Đã là thành viên? 
                                <Link to='/login' className ="ml-2">
                                    <u>
                                        Log in
                                    </u>
                                </Link> 
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Container>
        )
    }
}

