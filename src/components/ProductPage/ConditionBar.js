import React from 'react'
import {ProductConsumer} from "../../context";


export default function ConditionBar() {
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
                      <div className ="font-weight-light brand condition-choice" onClick = {()=> {value.FilterCondition(false)}}> New </div>
                      <div className ="font-weight-light brand condition-choice" onClick = {()=> {value.FilterCondition(true)}}> Used </div> 
              </div>
            </div>

         )}
     </ProductConsumer>
      
    )
}
