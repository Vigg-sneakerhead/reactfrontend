import React, { Component } from 'react'
import 'react-input-range/lib/css/index.css';
import InputRange from 'react-input-range';
import {ProductConsumer} from "../../context";

export default class PriceBar extends Component {
    constructor(props) {
        super(props);
    
        this.state = { value5: {
            min: 10.000,
            max: 20.000,
          },
        };
      }
    render() {
        return (
            <ProductConsumer>
                {context => (
                     <div>
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
        
                        <div id ="price-range" className ="price-range toggle-title mb-4">
                            <InputRange
                                draggableTrack
                                maxValue={30.000}
                                minValue={0}
                                step= {1}
                                formatLabel={value => {
                                    if (value == 0) {
                                        return value
                                    }
                                    else {
                                        return(
                                        
                                            `${value.toFixed(3)}.000`
                                
                                    )}}}
                                onChange={value => {
                                    this.setState({ value5: value });
                                    context.FilterPrice(this.state.value5.min,this.state.value5.max);
                                }}
                                onChangeComplete={value => {
                                    console.log(context.minPrice);
                                    console.log(value);

                                }}
                                
                                value={this.state.value5} />
                        </div>
                    </div>
                )}
            </ProductConsumer>
           
        )
    }
}
