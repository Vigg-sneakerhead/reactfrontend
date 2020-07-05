import React from 'react';

const checkoutTypes = (props) => {
    return (
        <div>
            <div className="mb-1">
                <label>
                    <input type="radio" name="iCheck" className="iradio_flat-blue"/> 
                    {' '}{props.value}{' '} 
                    {props.value === "Ví" ? (
                        <img src="assets/images/banks/logo-zalopay.svg" alt=""/>
                    ) : (
                        <span className="txtGray">(qua cổng ZaloPay)</span>
                    )}
                </label>
            </div>
        </div>
    );
};

export default checkoutTypes;
