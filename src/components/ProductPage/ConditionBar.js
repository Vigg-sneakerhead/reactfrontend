import React from 'react'

export default function ConditionBar() {
    return (
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
                    <div className ="font-weight-light brand condition-choice"> New </div>
                    <div className ="font-weight-light brand condition-choice"> Used </div> 
            </div>
        </div>
    )
}
