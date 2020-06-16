import React, { Component } from 'react';
import {ProductConsumer} from "../../context";

export default class BrandBar extends Component {
    componentDidMount(){
        this.Bold('all','nike','adidas','jordan','yeezy','puma','vans','converse');
    }
    Bold = (id,id2,id3,id4,id5,id6,id7,id8) => {
        
        var boldbar = document.getElementById(id);
        var lightbar = document.getElementById(id2);
        var lightbar2 = document.getElementById(id3);
        var lightbar3 = document.getElementById(id4);
        var lightbar4 = document.getElementById(id5);
        var lightbar5 = document.getElementById(id6);
        var lightbar6 = document.getElementById(id7);
        var lightbar7 = document.getElementById(id8);
        if (boldbar.style.fontWeight != 'bold') {
            boldbar.style.fontWeight = 'bold';
      
        }
        else {
            boldbar.style.fontWeight = 'normal';
        }
        lightbar.style.fontWeight ='normal';
        lightbar2.style.fontWeight ='normal';
        lightbar3.style.fontWeight ='normal';
        lightbar4.style.fontWeight ='normal';
        lightbar5.style.fontWeight ='normal';
        lightbar6.style.fontWeight ='normal';
        lightbar7.style.fontWeight ='normal';
        
    }

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
                            <div id = 'all' onClick ={()=> {
                                context.FilterBrand('none');
                                this.Bold('all','nike','adidas','jordan','yeezy','puma','vans','converse');
                            }}> All </div>
                            <div id ='nike' className =" brand" onClick ={()=> {
                                context.FilterBrand('nike');
                                this.Bold('nike','all','adidas','jordan','yeezy','puma','vans','converse');
                            }}> Nike </div>
                            <div id ='adidas' className =" brand"onClick ={()=> {
                                context.FilterBrand('adidas');
                                this.Bold('adidas','nike','all','jordan','yeezy','puma','vans','converse');
                            }}> Adidas </div>
                            <div id ='jordan'className =" brand"onClick ={()=> {
                                context.FilterBrand('jordan');
                                this.Bold('jordan','nike','adidas','all','yeezy','puma','vans','converse');
                            }}> Jordan </div>
                            <div id ='yeezy'className =" brand"onClick ={()=> {
                                context.FilterBrand('yeezy');
                                this.Bold('yeezy','nike','adidas','jordan','all','puma','vans','converse');
                            }}> Yeezy </div>
                            <div id ='puma'className ="brand"onClick ={()=> {
                                context.FilterBrand('puma');
                                this.Bold('puma','nike','adidas','jordan','yeezy','all','vans','converse');
                            }}> Puma </div>
                            <div id ='vans'className ="brand"onClick ={()=> {
                                context.FilterBrand('vans');
                                this.Bold('vans','nike','adidas','jordan','yeezy','puma','all','converse');
                            }}> Vans </div>
                            <div id ='converse'className =" brand"onClick ={()=> {
                                context.FilterBrand('converse');
                                this.Bold('converse','nike','adidas','jordan','yeezy','puma','vans','all');
                            }}> Converse </div>
                        </div>
                </div>
            )}
        </ProductConsumer>
        
    )
}}
