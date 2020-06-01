import React, {Component} from 'react'; 
import {Switch, Route} from 'react-router-dom';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Default from './components/Default';
import Cart from './components/Cart';
import Details from './components/Details';
import ProductList from './components/ProductList';
import Modal from './components/Modal'


export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Switch>
                    <Route exact path = "/"component = {ProductList}/> 
                    <Route path = "/details"component = {Details}/> 
                    <Route path = "/cart"component = {Cart}/> 
                    <Route path = "/blog"component = {Default}/>
                    <Route path = "/Sell"component = {Default}/>
                    <Route component = {Default}/>     
                </Switch>
                <Modal/>
            </React.Fragment>
        );
    }
}
