import React from 'react'

export default function SortByBar() {
    return (
        <select name="Sort">
            <option value="Newest" id ='Sort'>Newest</option>
            <option value="Pricelow">Price(low to high)</option>
            <option value="Pricehigh">Price(high to low)</option>
        </select>
                  
    )
}
