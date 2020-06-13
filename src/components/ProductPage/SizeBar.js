import React, { Component } from 'react'
import InputRange from 'react-input-range';
import './ProductPage.css';
import 'react-input-range/lib/css/index.css';

export default class SizeBar extends Component {
    constructor(props) {
        super(props);
    
        this.state = { value5: {
            min: 6,
            max: 10,
          },
        };
      }
    render() {
        
        return (
         <div>
            <div className = "price-toggle component-toggle" onClick = {() => {
                var x = document.getElementById("size-range");
                var y = document.getElementById("brandtoggle3");
                if (x.style.display !== "block") {
                    x.style.display = "block";
                    y.innerHTML = "-"
                }
                else {
                    x.style.display = "none";
                    y.innerHTML = "+"
                
                } 
            }}>
                Size <span id ="brandtoggle3" className ="toggle"> + </span>
            </div>

            <div id ="size-range" className ="price-range toggle-title mb-4">
                <InputRange
                    draggableTrack
                    maxValue={12.5}
                    minValue={4}
                    step= {0.5}
                    onChange={value => this.setState({ value5: value })}
                    onChangeComplete={value => console.log(value)}
                    value={this.state.value5} />
            </div>
         </div>
        )
    }
}
