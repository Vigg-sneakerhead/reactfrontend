import React, { Component } from 'react'

export default class ImageStandard extends Component {
    render() {
        return (
            <div className ="container">
                <div class="row">
                    <div className ="col-lg-12 col-md-6 mt-5 text-center  shadow-lg">
                        <h1 className ="text-light">
                        ĐẢM BẢO ẢNH CỦA BẠN 
                        </h1>
                        <h1 className ="text-warning">
                        CÓ ĐẦY ĐỦ NHỮNG YẾU TỐ SAU ĐÂY  
                        </h1>
                    </div>      
                </div>
                <div class="row">   
                    <div className ="text-center col-md-6 col-lg-6 col-sm-12 mt-5">
                        <h2 className ="text-light shadow"> 1. Hộp</h2>
                        <img
                            src="assets/images/how-to-sell/standard/box .jpg"
                            style={{objectFit:'contain',}}
                        />
                        
                    </div>
                    <div className ="text-center col-md-6 col-lg-6 col-sm-12 mt-5">
                        <h2 className ="text-light shadow"> 2. Nametag</h2>
                        <img
                            src="assets/images/how-to-sell/standard/nametag.jpg"
                            style={{objectFit:'contain',}}
                        />
                        
                    </div>
                </div>
                <div class="row">
                    <div className ="text-center col-md-6 col-lg-6 col-sm-12 mt-5">
                        <h2 className ="text-light shadow"> 3. Mũi giày</h2>
                        <img
                            src="assets/images/how-to-sell/standard/mui.jpg"
                            style={{objectFit:'contain',}}
                        />
                        
                    </div>
                    <div className ="text-center col-md-6 col-lg-6 col-sm-12 mt-5">
                        <h2 className ="text-light shadow"> 4. Đế Giày</h2>
                        <img
                            src="assets/images/how-to-sell/standard/de.jpg"
                            style={{objectFit:'contain',}}
                        />
                        
                    </div>
                </div>
                <div class="row">
                    <div className ="text-center col-md-6 col-lg-6 col-sm-12 mt-5">
                        <h2 className ="text-light shadow"> 5. Đít Giày</h2>
                        <img
                            src="assets/images/how-to-sell/standard/dit.jpg"
                            style={{objectFit:'contain',}}
                        />
                        
                    </div>
                    <div className ="text-center col-md-6 col-lg-6 col-sm-12 mt-5">
                        <h2 className ="text-light shadow"> 6. Bên Ngoài</h2>
                        <img
                            src="assets/images/how-to-sell/standard/ngoai.jpg"
                            style={{objectFit:'contain',}}
                        />
                        
                    </div>
                </div>
                <div class="row">
                    <div className ="text-center col-md-6 col-lg-6 col-sm-12 mt-5">
                        <h2 className ="text-light shadow"> 7. Bên Trong</h2>
                        <img
                            src="assets/images/how-to-sell/standard/trong.jpg"
                            style={{objectFit:'contain',}}
                        />
                        
                    </div>
                    <div className ="text-center col-md-6 col-lg-6 col-sm-12 mt-5">
                        <h2 className ="text-light shadow"> 8. Tem</h2>
                        <img
                            src="assets/images/how-to-sell/standard/tem.jpg"
                            style={{objectFit:'contain',}}
                        />
                        
                    </div>
                </div>
                <div class="row">
                    <div className ="text-center col-md-6 col-lg-6 col-sm-12 mt-5">
                        <h2 className ="text-light shadow"> 9. Lót Giày</h2>
                        <img
                            src="assets/images/how-to-sell/standard/loggiay.jpg"
                            style={{objectFit:'contain',}}
                        />
                        
                    </div>
                    <div className ="text-center col-md-6 col-lg-6 col-sm-12 mt-5">
                        <h2 className ="text-light shadow"> 10. Khiếm Khuyết(nếu có)</h2>
                        <img
                            src="assets/images/how-to-sell/standard/khiemkhuyet.jpg"
                            style={{objectFit:'contain',}}
                        />
                        
                    </div>
                </div>
            </div>
        )
    }
}
