import React from 'react';
import { Container } from 'react-bootstrap';
import './Checkout.css';
import CheckoutTypes from './CheckoutTypes/CheckoutTypes';
import Banks from './Banks/Banks';

const checkOut = () => {
    const paymentTypes = ['Ví', 'Visa, Mastercard, JCB', 'Thẻ ATM'];
    return (
        <Container className="checkout">
            <p>
                Vui lòng chọn hình thức thanh toán:
            </p>
            <div className="payment-types">
                {paymentTypes.map(item => {
                    return <CheckoutTypes key={item} value={item}/>;
                })}
            </div>
            <Banks/>
        </Container>
    );
};

export default checkOut;