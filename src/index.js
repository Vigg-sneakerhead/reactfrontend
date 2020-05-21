import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



const myfirstelement = <h1>Hello </h1>

const viggtitle = (
  <table>
    <tr>
      <th>
        Vigg 
      </th>
    </tr>
      <th>
        find your dreamed sneakers 
      </th>      
    <tr>

    </tr>

  </table>
);

const menu = (
  <div className="container">
    <div className="row">
      <div className="col-6"> menu1 </div>
      <div className="col-6"> 
        <span>
          <i className = 'fas fa-home'/>
        </span> 
      </div>
    </div>
  </div>
)
ReactDOM.render(menu, document.getElementById('menu'));
ReactDOM.render(myfirstelement, document.getElementById('root'));
ReactDOM.render(viggtitle, document.getElementById('header'));