import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import StandardCard from './StandardCard';
import './ImageStandard.css';

export default class ImageStandard extends Component {
    render() {
        return (
            <Container className="image-standard">
                <h1 className ="first-line text-center" style={{color:'white'}}>
                    ĐẢM BẢO ẢNH CỦA BẠN 
                </h1>
                <h1 className ="text-center" style={{color:'yellow'}}>
                    CÓ ĐẦY ĐỦ NHỮNG YẾU TỐ SAU ĐÂY  
                </h1>
                <Row>
                    <StandardCard 
                        title="1. Hộp"
                        img="assets/images/how-to-sell/standard/box.jpg"/>
                    <StandardCard 
                        title="2. Nametag"
                        img="assets/images/how-to-sell/standard/nametag.jpg"/>
                </Row>
                <Row>
                    <StandardCard 
                        title="3. Mũi giày"
                        img="assets/images/how-to-sell/standard/mui.jpg"/>
                    <StandardCard 
                        title="4. Đế Giày"
                        img="assets/images/how-to-sell/standard/de.jpg"/>
                </Row>
                <Row>
                    <StandardCard 
                        title="5. Đít Giày"
                        img="assets/images/how-to-sell/standard/dit.jpg"/>
                    <StandardCard 
                        title="6. Bên Ngoài"
                        img="assets/images/how-to-sell/standard/ngoai.jpg"/>
                </Row>
                <Row>
                    <StandardCard 
                        title="7. Bên Trong"
                        img="assets/images/how-to-sell/standard/trong.jpg"/>
                    <StandardCard 
                        title="8. Tem"
                        img="assets/images/how-to-sell/standard/tem.jpg"/>
                </Row>
                <Row>
                    <StandardCard 
                        title="9. Lót Giày"
                        img="assets/images/how-to-sell/standard/loggiay.jpg"/>
                    <StandardCard 
                        title="10. Khiếm Khuyết"
                        img="assets/images/how-to-sell/standard/khiemkhuyet.jpg"/>
                </Row>
            </Container>
        )
    }
}
