import React, { Component } from 'react'
import './Footer.css';
import viggicon from '../../vigg.png';
import fb from './footerimg/fb-icon.png';
import insta from './footerimg/insta-icon.png';
import lkn from './footerimg/linkedin-icon.png';
import styled from 'styled-components';

export default class Footer extends Component {
    render() {
        return (
        <FooterContainer>
            <div className ="container-fluid footer">
                <div className ="row">
                    <div className = "col-lg-6 col-md-6 col-sm-12 mx-auto text-center my-1">
                        <h3> Liên hệ chúng tôi </h3> 
                        <h5>Email:<span><a href ='gmail.com'> viggmarket-place@gmail.com</a></span></h5>
                        <h5>Sdt: (+84) 0396 549 315</h5>
                        <h5>Trụ sở: 7 Trung Lang, Phường 12, Quận Tân Bình, Thành Phố Hồ Chí Minh</h5>
                    </div>  
                    <div className = "col-lg-6 col-md-6 col-sm-12 mx-auto text-center justify-content-center my-auto">
                        <div className ="container">
                            <div className = "row">
                                <div className = 'col logo'>
                                    <img src = {fb} className = "logo"/>
                                </div>
                                <div className = 'col logo'>
                                    <img src = {insta} className = "logo"/>
                                </div>
                                <div className = 'col logo'>
                                    <img src = {lkn} className = "logo"/>
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
