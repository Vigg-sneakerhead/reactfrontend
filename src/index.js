import React from 'react'; 
import {HashRouter as Router} from 'react-router-dom';
import "./index.css";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {ProductProvider} from "./context";

ReactDOM.render(
  <ProductProvider>
    <Router>
      <App/>
    </Router>
  </ProductProvider>, document.getElementById('root')
);

