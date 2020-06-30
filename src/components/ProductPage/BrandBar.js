import React, { Component } from 'react';
import {ProductConsumer} from "../../context";

export default class BrandBar extends Component {
    render(){
    return (
        <ProductConsumer>
            {context => (
                <div>
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
        
                        <div id ="brands" className ="toggle-title brand">
                            <div id = 'all' className= {context.Brand == 'none'? " brandbold ": "brand"}onClick ={()=> {
                                context.FilterBrand('none');     
                            }}> All </div>
                            <div id ='nike' className = {context.Brand == 'nike'? " brandbold ": "brand"} onClick ={()=> {
                                context.FilterBrand('nike');
                            }}> Nike </div>
                            <div id ='adidas' className ={context.Brand == 'adidas'? " brandbold ": "brand"}onClick ={()=> {
                                context.FilterBrand('adidas');
                            }}> Adidas </div>
                            <div id ='jordan'className ={context.Brand == 'jordan'? " brandbold ": "brand"}onClick ={()=> {
                                context.FilterBrand('jordan');
                            }}> Jordan </div>
                            <div id ='yeezy'className ={context.Brand == 'yeezy'? " brandbold ": "brand"}onClick ={()=> {
                                context.FilterBrand('yeezy');
                            }}> Yeezy </div>
                            <div id ='puma'className ={context.Brand == 'puma'? " brandbold ": "brand"}onClick ={()=> {
                                context.FilterBrand('puma');
                            }}> Puma </div>
                            <div id ='vans'className ={context.Brand == 'vans'? " brandbold ": "brand"} onClick ={()=> {
                                context.FilterBrand('vans');
                            }}> Vans </div>
                            <div id ='converse'className ={context.Brand == 'converse'? " brandbold ": "brand"}onClick ={()=> {
                                context.FilterBrand('converse');
                            }}> Converse </div>
                        </div>
                </div>
            )}
        </ProductConsumer>
        
    )
}}
