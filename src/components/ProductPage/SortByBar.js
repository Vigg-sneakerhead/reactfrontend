import React from 'react'
import {ProductConsumer} from "../../context";

export default function SortByBar() {
    return (
        <ProductConsumer>
            {value => (
                <select id = "sort" name="Sort" onChange = {()=> {
                    var zone = document.getElementById("sort");
            
                    if (zone.value === "Pricelow"){
                        value.Sortby('lowtohigh')
                    }
                    else if(zone.value === "Pricehigh"){
                        value.Sortby('hightolow')
                    }
                    else {
                        value.Sortby('default')
                    }
                }}>
                    <option value="title" id ='Sort'>Sort by </option>
                    <option value="Pricelow">Price(low to high)</option>
                    <option value="Pricehigh">Price(high to low)</option>
                </select>
            )}
        </ProductConsumer>             
    )
}
