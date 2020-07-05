import React from 'react'; 
import {Switch, Route} from 'react-router-dom';
import Default from './components/Default';
import Cart from './components/Cart/Cart';
import Details from './components/Details';
import ProductPage from './components/ProductPage/ProductPage';
import LoginPage from './components/LoginPage/LoginPage';
import FrontPage from './components/FrontPage/FrontPage';
import CheckoutPage from './components/CheckoutPage/Checkout';
import SignUp from './components/LoginPage/SignUp';


const Routes = () => (
    <Switch>
        <Route exact path="/">
            <div className ="home-page">
                <img 
                    alt="background"
                    className="background" 
                    src="assets/images/background.jpg"
                    style={{"position":"absolute", "zIndex":-1,}}
                />
                <FrontPage/>
            </div>
        </Route>
        <Route exact path = "/product-page">
            <ProductPage/>
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
        <Route exact path = "/signup">
            <SignUp/>
        </Route>
        <Route exact path = "/checkout">
            <CheckoutPage/>
        </Route>
    </Switch>
);

export default Routes;