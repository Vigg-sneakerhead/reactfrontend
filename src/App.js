import React, {Component} from 'react'; 
import {Switch, Route} from 'react-router-dom';
import "./index.css";
import "./components/HomePage/HomePage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import"./components/components.css";
import"./components/HomePage/OwlCarousel.css";
import './components/HomePage/Footer/Footer.css';
import Navbar from './components/Navbar';
import Default from './components/Default';
import Cart from './components/Cart/Cart';
import Details from './components/Details';
import ProductList from './components/ProductPage/ProductList';
import Modal from './components/Modal';
import HomePage from './components/HomePage/HomePage'



export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Switch>
                    <Route exact path = "/"component = {HomePage}/> 
                    <Route exact path = "/Productlist"component = {ProductList}/> 
                    <Route path = "/details"component = {Details}/> 
                    <Route path = "/cart"component = {Cart}/> 
                    <Route path = "/Gallery"component = {Default}/>
                    <Route path = "/Sell"component = {Default}/>
                    <Route component = {Default}/>     
                </Switch>
                <Modal/>
            </React.Fragment>
        );
    }
}
