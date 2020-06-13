import React from 'react'

export default function SortByBar() {
    return (
        <select name="Sort By">
            <option value="Newest">Newest</option>
            <option value="Pricelow">Price(low to high)</option>
            <option value="Pricehigh">Price(high to low)</option>
            <option value="nameA">Name(A to Z)</option>
            <option value="nameZ">Name(Z to A)</option>
        </select>
                  
    )
}
