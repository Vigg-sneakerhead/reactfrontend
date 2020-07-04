import React from 'react'; 
import {Switch, Route} from 'react-router-dom';

import Default from './components/Default';
import Cart from './components/Cart/Cart';
import Details from './components/Details';
import ProductList from './components/ProductPage/ProductList';
import LoginPage from './components/LoginPage/LoginPage';
import FrontPage from './components/HomePage/FrontPage';
import background from './background.jpg';
import CheckoutPage from './components/CheckoutPage/Checkout';


const Routes = () => (
    <Switch>
        <Route exact path="/">
            <div className ="home-page">
                <img 
                    alt="background"
                    className="background" 
                    src={background} 
                    style={{"position":"absolute", "zIndex":-1,}}
                />
                <FrontPage/>
            </div>
        </Route>
        <Route exact path = "/product-list">
            <ProductList/>
        </Route>
        <Route exact path = "/details">
            <Details/>
        </Route> 
        <Route exact path = "/cart">
            <Cart/>
        </Route>
        <Route exact path = "/gallery">
            <Default/>
        </Route>
        <Route exact path = "/sell">
            <Default/>
        </Route>
        <Route exact path = "/login">
            <LoginPage/>
        </Route>
        <Route exact path = "/checkout">
            <CheckoutPage/>
        </Route>
    </Switch>
);

export default Routes;