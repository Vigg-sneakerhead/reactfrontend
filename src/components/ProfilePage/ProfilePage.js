import React, { Component } from 'react'
import { Container, Row, Col, Form, FormLabel} from 'react-bootstrap'
import './ProfilePage.css'

export default class ProfilePage extends Component {
    state = {
        show: 'profile',
    }
    setProfile = () => {
        this.setState(()=> {
            return {show:'profile'}
        })
        console.log(this.state.show);
    }
    setSetting = () => {
        this.setState(()=> {
            return {show:'setting'}
        })
        console.log(this.state.show);
    }
    setOrder = () => {
        this.setState(()=> {
            return {show:'order'}
        })
        console.log(this.state.show);
    }
    
    render() {
        let profilebox = (
            <div className ="text-center">
                <Row>
                    <div className ="mx-auto mt-5">
                        <img  src="assets/images/profile/profilepic.png"
                            style={{ objectFit:'contain', height: '50%', width: '50%'}}
                            className ="rounded-circle" 
                        />
                        <div className ="mx-auto my-2">
                             An Cao
                        </div> 
                        <button className ="mx-auto pc">
                            <span>Change profile picture</span>
                        </button>
                    </div>   
                </Row>
                <Row className ="p2 mt-2"onClick = {()=> this.setOrder()}>
                  <span className ="mx-auto my-2" >Đơn hàng của tôi </span>
                </Row>
                <Row className ="p2 my-3"onClick = {()=> this.setProfile()}>
                    <span className ="mx-auto my-2">Tài khoản của tôi </span>
                </Row>
                <Row className ="p2 mb-2"onClick = {()=> this.setSetting()}> 
                    <span className ="mx-auto my-2">Cài đặt </span>
                </Row>
            </div>
            )
        let accountdetail = (
            <div className = "ml-3 my-3"> 
                <Row className ="ml-1">
                    <h2>My Account</h2>
                </Row>
                <Row className ="ml-1">
                    chỉnh sửa thông tin cá nhân 
                </Row>
                <hr/>
                <Row className ="ml-1 my-3">
                    Login email: <span className ="ml-2">{this.props.email}</span>
                </Row>
          
                <Row>
                        <div className ="col-5 text-left ml-1 ">
                                <FormLabel className="font-weight-bold">Tên</FormLabel>
                                <Form.Control value = "An" />
                                <FormLabel className="font-weight-bold my-2">Contact Email</FormLabel>
                                <Form.Control value = {this.props.email} className ='email'/>
                                <span className ="noti email" style = {{fontSize:'10px'}}>Email chúng tôi sẽ dùng để liên lạc bạn</span>
                        </div>
                        <div className ="col-5 text-left">
                            <FormLabel className="font-weight-bold">Họ</FormLabel>
                            <Form.Control value = "Cao" />
                            <FormLabel className="font-weight-bold my-2">Số điện thoại</FormLabel>
                            <Form.Control value = {this.props.phone} />
                        </div>
                </Row>
                <div className ="text-left ml-1 my-3 diachibar">
                    <FormLabel className="font-weight-bold">Địa chỉ</FormLabel>
                    <Form.Control value = "đường" />
                </div>
                <Row className ="my-3">
                        <div className ="col-5 text-left ml-1 ">
                            <Form.Control value = "Thành Phố" />
                            <Form.Control value = "Việt Nam" className ="my-3" />         
                        </div>
                        <div className ="col-5 text-left">
                            <Form.Control value = "zip"/>   
                        </div>
                </Row>
                <button className = "ml-1 update">
                    Update
                </button>
            </div>
        )
        let orderdetail = (
            <div className = "ml-3 my-3">
                <Row className ="ml-1">
                    <h2>Order</h2>
                </Row>
                <Row className ="ml-1">
                    chỉnh sửa thông tin cá nhân 
                </Row>
                <hr/>
            </div>
                
        )
        let setting = (
            <div className = "ml-3 my-3">
                <Row className ="ml-1">
                    <h2>Setting</h2>
                </Row>
                <Row className ="ml-1">
                    chỉnh sửa thông tin cá nhân 
                </Row>
                <hr/>
            </div>
                
        )
        let detail;
        if (this.state.show === 'profile') {
            detail = accountdetail
        }
        else if(this.state.show === 'order') {
            detail = orderdetail
        }
        else if(this.state.show === 'setting'){
            detail = setting
        }
             
        return (
            <Container style ={{paddingTop:'2cm'}} className ="my-5">
                <Row className =" mb-0">
                    <Col lg ={3} className ="mx-auto profilebox">
                        {profilebox}
                    </Col>
                    <Col lg ={8} className = "ml-3 accountdetail">
                        {detail}
                    </Col>
                </Row>
            </Container>
        )
    }
}
