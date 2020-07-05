import React, { Component } from 'react';
import{Link} from 'react-router-dom';
import viggicon from '../vigglogo2.png';
export default class SignUp extends Component {
    render() {
        return (
            <div className ="container">
                <div className ="col-8 mx-auto col-md-6 col-lg-4 p-2 signuppanel">
                    <form>
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

                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        <div className ="row my-5 ">
                            <div className ='col text-center'>
                                Đã là thành viên? 
                                <Link to='/login' className ="ml-2">
                                <u>
                                    Log in
                                </u>
                                </Link> 
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

