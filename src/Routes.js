import React from 'react'; 
import {Switch, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Details from './components/Details';
import ProductPage from './components/ProductPage/ProductPage';
import LoginPage from './components/LoginPage/LoginPage';
import FrontPage from './components/FrontPage/FrontPage';
import CheckoutPage from './components/CheckoutPage/Checkout';
import SignUp from './components/LoginPage/SignUp';
import SellPage from './components/SellPage/SellPage';
import BigCarousel from './components/BigCarousel/BigCarousel';
import NotFound from './components/NotFound/NotFound';
import HowToShip from './components/HowToSell/HowToShip';
import ImageStandard from './components/HowToSell/Standard/ImageStandard';
import ProfilePage from './components/ProfilePage/ProfilePage';



const Routes = () => (
    <Switch>
        <Route exact path="/">
            <div className ="home-page">
                <img 
                    alt="background"
                    className="background" 
                    src="assets/images/background.jpg"
                    style={{"position":"fixed", "zIndex":-1, objectFit:'cover', height: '100%', width: '100%'}}
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
        {/* <Route exact path = "/gallery">
            <Default/>
        </Route> */}
        <Route exact path = "/sell">
            <SellPage/>
        </Route>
        <Route exact path = "/how-to-sell">
            <BigCarousel/>
        </Route>

        <Route exact path = "/image-standards"> 
            <img 
                    alt="background"
                    className="background" 
                    src="assets/images/how-to-sell/standard/standard-background.jpg"
                    style={{"position":"fixed", "zIndex":-1, objectFit:'cover', height: '100%', width: '100%'}}
                />
            <ImageStandard/>
        </Route>
        <Route exact path = "/how-to-ship">    
            <img 
                alt="background"
                className ="background"
                src="assets/images/how-to-sell/ship/backgroundship.jpg"
                style={{"position":"fixed", "zIndex":-1, objectFit:'cover', height: '100%', width: '100%'}}
            />
            <HowToShip/>
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
        <Route exact path = "/myaccount">
        <img 
                alt="background"
                className ="background"
                src="assets/images/profile/profilepagebackground.jpg"
                style={{"position":"fixed", "zIndex":-1, objectFit:'cover', height: '100%', width: '100%'}}
            />
            <ProfilePage/>
        </Route>
        <Route>
            <NotFound/>
        </Route>
    </Switch>
);

export default Routes;