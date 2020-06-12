import React, { Component } from 'react'

import './ProductPage.css';

export default class FilterBar extends Component {
    render() {
        
        return (
            <div className ="ml-4">
                <h5>Filter by</h5>
                <hr/>
                
                <div className = "brand-toggle" onClick = {() => {
                        var x = document.getElementById("brands");
                        var y = document.getElementById("brandtoggle");
                        if (x.style.display !== "block") {
                            x.style.display = "block";
                            y.innerHTML = "-"
                        }
                        else {
                            x.style.display = "none";
                            y.innerHTML = "+"
                        
                        } 
                    }}>
                    Brand  <span id ="brandtoggle" className ="toggle"> + </span>
                </div>

                <div id ="brands" className ="brandlist">
                    brands
                </div>
            </div>
        )
    }
}
