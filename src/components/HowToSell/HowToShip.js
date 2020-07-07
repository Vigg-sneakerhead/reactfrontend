import React, { Component } from 'react'
import './HowToShip.css';
import { Row } from 'react-bootstrap';

export default class HowToShip extends Component {
    render() {
        return (
        <div className = "container ">
            <h1 className ="first-line text-center mt-5 " style={{color:'white', paddingTop: '2cm',fontSize: '300%',fontWeight: '700'}}>
                   CÁCH SHIP HÀNG
            </h1>
            <h1 className ="text-center" style={{color:'white',fontSize: '300%',fontWeight: '700'}}>
                    VÀ NHẬN TIỀN
            </h1>
            <div className="row mt-5 mb-5">
                <div className ="col-4 text-center titlebox align-middle">
                   <h2 className ="mt-5">
                   SHIP GIÀY
                   </h2>
                </div>
                <div className ="col-8 infobox">
                    <div className ="ml-5 mt-3">1. Sau khi giày của bạn được đặt mua, Vigg sẽ gửi thông báo qua email.</div>
                    <div className ="ml-5 mt-3">2. Kèm theo email, Vigg sẽ gửi shipping label.</div>
                    <div className ="ml-5 mt-3">3. Điểm đến đầu tiên của giày bạn sẽ luôn là warehouse của Vigg.</div>
                    <div className ="ml-5 mt-3 mb-3">4. Sau khi giày được kiểm duyệt, Vigg sẽ đảm bảo giày đến tận tay người mua.</div>
                </div>
            </div>
            <div className="row mt-5 mb-3"style ={{paddingBottom:"2cm"}}>
                <div className ="col-4 text-center justify-content-center titlebox2">
                   <h2 className ="mt-5" >
                   NHẬN GIÀY
                   </h2>
                </div>
                <div className ="col-8 infobox2">
                    <div className ="ml-5 mt-3">1. Sau khi giày đến tay người mua, Vigg sẽ là đơn vị tận tay nhận tiền từ khách hàng.</div>
                    <div className ="ml-5 mt-3">2. Vigg sẽ thu 5% phí dịch vụ trên mỗi giao dịch.</div>
                    <div className ="ml-5 mt-3">3. Sau đó Vigg sẽ giải ngân 95% số tiền còn lại của giao dịch qua tài khoản ngân hàng của bạn.</div>
                </div>
            </div>
        </div>
        )
    }
}
