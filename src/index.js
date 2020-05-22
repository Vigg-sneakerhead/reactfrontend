import React from 'react'; 
import {BrowserRouter as Router} from 'react-router-dom';
import "./index.css";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';


ReactDOM.render(
<Router>
  <App/>
</Router>, document.getElementById('root'));
