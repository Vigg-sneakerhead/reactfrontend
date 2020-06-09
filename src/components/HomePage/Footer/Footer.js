import React, { Component } from 'react'
import './Footer.css';
import fb from './footerimg/fb-icon.png';
import insta from './footerimg/insta-icon.png';
import lkn from './footerimg/linkedin-icon.png';
import styled from 'styled-components';

export default class Footer extends Component {
    render() {
        return (
        <FooterContainer>
            <div className ="container-fluid footer">
                <div className ='container'>
                    <div className ="row">      
                        <div className = "col-lg-6 col-md-6 col-sm-12 text-left my-3">
                            <h3 className ="info"> Liên hệ chúng tôi </h3> 
                            <h5><i className ='fas fa-envelope'/> Email:<span><a href ='https://mail.google.com/'> viggmarket-place@gmail.com</a></span></h5>
                            <h5><i className ='fas fa-phone'/> Sdt: (+84) 0396 549 315</h5>
                            <h5><i className ='fas fa-map-marker'/> Trụ sở: 7 Trung Lang, Phường 12, Quận Tân Bình, </h5>
                            <h5 > Thành Phố Hồ Chí Minh</h5>
                        </div> 
                        <div className = "col-lg-4 col-md-4 col-sm-12 mx-auto text-center justify-content-center my-auto">
                            <div className ="container">
                                <div className = "row">
                                    <div className = 'col logo'>
                                        <a href = "https://facebook.com"><img  src = {fb} className = "logo"/></a>
                                    </div>
                                    <div className = 'col logo'>
                                        <a href = "https://instagram.com"><img src =  {insta} className = "logo"/></a>
                                    </div>
                                    <div className = 'col logo'>
                                    <a href = "https://linkedin.com"><img  src = {lkn} className = "logo"/></a>
                                    </div>
                                </div>  
                            </div>
                        </div>  
                    </div>                       
                </div>
            </div>  
        </FooterContainer>
        )
    }
}


const FooterContainer = styled.div`
position:relative; 
right:0;
bottom:0;
background:var(--mainBlack);
display:flex;
`;
