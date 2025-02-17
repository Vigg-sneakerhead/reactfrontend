import React, { Component } from 'react'
import Title from '../Title'
import CartCollums from './CartCollums'
import EmptyCart from './EmptyCart'
import {ProductConsumer} from '../../context'
import CartList from './CartList' 
import CartTotals from './CartTotals.js'

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length > 0){
                            return (
                                <React.Fragment>
                                        <Title className ='my-3' name = "Your Cart"/>
                                        <CartCollums/>
                                        <CartList value = {value}/>
                                        <CartTotals value = {value}/>

                                </React.Fragment>
                            )
                        }
                        else {
                            return (<EmptyCart/>)
                        }
                    }}
                </ProductConsumer>
               
            </section>

        )
    }
}
