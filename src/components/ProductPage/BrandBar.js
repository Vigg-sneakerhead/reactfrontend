import React from 'react'

export default function BrandBar() {
    return (
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

                <div id ="brands" className ="toggle-title">
                    <div className ="font-weight-bold "> All </div>
                    <div className ="font-weight-light brand"> Nike </div>
                    <div className ="font-weight-light brand"> Adidas </div>
                    <div className ="font-weight-light brand"> Jordon </div>
                    <div className ="font-weight-light brand"> Yeezy </div>
                    <div className ="font-weight-light brand"> Puma </div>
                    <div className ="font-weight-light brand"> Vans </div>
                    <div className ="font-weight-light brand"> Converse </div>
                </div>
        </div>
    )
}
