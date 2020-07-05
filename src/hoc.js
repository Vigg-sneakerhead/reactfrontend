import React from 'react';
import { ProductConsumer } from './context';

const WithContext = (Component) => {
    return (props) => (
        <ProductConsumer>
            {value =>                 
                <Component {...props} value={value}/>
            }
        </ProductConsumer>
    )
}

export default WithContext;