import React from 'react'
import {ProductConsumer} from "../../context";

export default function BrandBar() {
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
                            <div className ="font-weight-bold "onClick ={()=> {
                                context.FilterBrand('none');
                            }}> All </div>
                            <div className ="font-weight-light brand" onClick ={()=> {
                                context.FilterBrand('nike');
                            }}> Nike </div>
                            <div className ="font-weight-light brand"onClick ={()=> {
                                context.FilterBrand('adidas');
                            }}> Adidas </div>
                            <div className ="font-weight-light brand"onClick ={()=> {
                                context.FilterBrand('jordan');
                            }}> Jordan </div>
                            <div className ="font-weight-light brand"onClick ={()=> {
                                context.FilterBrand('yeezy');
                            }}> Yeezy </div>
                            <div className ="font-weight-light brand"onClick ={()=> {
                                context.FilterBrand('puma');
                            }}> Puma </div>
                            <div className ="font-weight-light brand"onClick ={()=> {
                                context.FilterBrand('vans');
                            }}> Vans </div>
                            <div className ="font-weight-light brand"onClick ={()=> {
                                context.FilterBrand('converse');
                            }}> Converse </div>
                        </div>
                </div>
            )}
        </ProductConsumer>
        
    )
}
