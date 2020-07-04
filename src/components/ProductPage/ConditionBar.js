import React, { Component } from 'react';
import {ProductConsumer} from "../../context";


export default class ConditionBar extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            Condition:'none',
        };
      }
    
    render() {
   
        return (
        <ProductConsumer>
            {value => (
                <div>
                <div className = "component-toggle" onClick = {() => {
                    var x = document.getElementById("condition-range");
                    var y = document.getElementById("toggle4");
                    if (x.style.display !== "block") {
                        x.style.display = "block";
                        y.innerHTML = "-"
                    }
                    else {
                        x.style.display = "none";
                        y.innerHTML = "+"
                    
                    } 
                }}>
                    Condition <span id ="toggle4" className ="toggle"> + </span>
                </div>
    
                <div id ="condition-range" className ="toggle-title mb-4">
                        <div id ='new'className = {value.Condition === 'new'? " brandbold ": "brand"} onClick = {()=> {
                            value.FilterCondition('new');               
                            console.log(this.state.Condition);
                        }}> New </div>
                        <div id ='old' className ={value.Condition === 'old'? " brandbold ": "brand"} onClick = {()=> {
                            value.FilterCondition('old');      
                        }}> Used </div> 
                </div>
                </div>

            )}
        </ProductConsumer>
        
        )
        }
    }
