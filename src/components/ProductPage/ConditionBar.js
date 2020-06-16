import React, { Component } from 'react';
import {ProductConsumer} from "../../context";


export default class ConditionBar extends Component {
    Bold = (id,id2) => {
        
        var boldbar = document.getElementById(id);
        var lightbar = document.getElementById(id2);
        if (boldbar.style.fontWeight != 'bold') {
            boldbar.style.fontWeight = 'bold';
      
        }
        else {
            boldbar.style.fontWeight = 'normal';
        }
        lightbar.style.fontWeight ='normal';
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
                        <div id ='new'className ="brand condition-choice" onClick = {()=> {
                            value.FilterCondition('new');
                            this.Bold('new','old');
                        }}> New </div>
                        <div id ='old' className ="brand condition-choice" onClick = {()=> {
                            value.FilterCondition('old');
                            this.Bold('old','new');
                        }}> Used </div> 
                </div>
                </div>

            )}
        </ProductConsumer>
        
        )
}}
