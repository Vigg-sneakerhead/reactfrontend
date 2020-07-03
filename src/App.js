import React, {Component} from 'react'; 
import {Switch, Route} from 'react-router-dom';
import "./index.css";
import "./components/HomePage/HomePage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import"./components/components.css";
import"./components/HomePage/OwlCarousel.css";
import './components/HomePage/Footer/Footer.css';
import NavbarClass from './components/Navbar';
import Default from './components/Default';
import Cart from './components/Cart/Cart';
import Details from './components/Details';
import ProductList from './components/ProductPage/ProductList';
import Modal from './components/Modal';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';



export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarClass />
        
                    <Switch>
                        <Route exact path = "/"component = {HomePage}/> 
                        <Route exact path = "/Productlist"exact component = {ProductList}/> 
                        <Route path = "/details"component = {Details}/> 
                        <Route path = "/cart"component = {Cart}/> 
                        <Route path = "/Gallery"component = {Default}/>
                        <Route path = "/Sell"component = {Default}/>
                        <Route path = "/Login"component = {LoginPage}/>
                        <Route component = {Default}/>     
                    </Switch>
                
                <Modal/>
            </React.Fragment>
        );
    }
}
