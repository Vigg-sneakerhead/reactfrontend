import React, { Component } from 'react'
import InputRange from 'react-input-range';
import './ProductPage.css';
import 'react-input-range/lib/css/index.css';

export default class FilterBar extends Component {  
    constructor(props) {
        super(props);
    
        this.state = { value5: {
            min: 1000000,
            max: 2000000,
          },
        };
      }
    render() { 
        return (
            <div className ="ml-4">
                <h5>Filter by</h5>
                <hr/>
                
                <div className = "component-toggle" onClick = {() => {
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
                    <div className ="font-weight-bold "> All </div>
                    <div className ="font-weight-light brand"> Nike </div>
                    <div className ="font-weight-light brand"> Adidas </div>
                    <div className ="font-weight-light brand"> Jordon </div>
                    <div className ="font-weight-light brand"> Yeezy </div>
                    <div className ="font-weight-light brand"> Puma </div>
                    <div className ="font-weight-light brand"> Vans </div>
                    <div className ="font-weight-light brand"> Converse </div>
                </div>
                
                <div className = "price-toggle component-toggle" onClick = {() => {
                        var x = document.getElementById("price-range");
                        var y = document.getElementById("brandtoggle2");
                        if (x.style.display !== "block") {
                            x.style.display = "block";
                            y.innerHTML = "-"
                        }
                        else {
                            x.style.display = "none";
                            y.innerHTML = "+"
                        
                        } 
                    }}>
                    Giá <span id ="brandtoggle2" className ="toggle"> + </span>
                </div>

                <div id ="price-range" className ="brandlist">
                    <InputRange
                        draggableTrack
                        maxValue={3000000}
                        minValue={0}
                        onChange={value => this.setState({ value5: value })}
                        onChangeComplete={value => console.log(value)}
                        value={this.state.value5} />
                </div>
            </div>
            
        )
    }
}
