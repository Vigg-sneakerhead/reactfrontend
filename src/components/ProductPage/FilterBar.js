import React, { Component } from 'react'


export default class FilterBar extends Component {
    render() {
        return (
            <div className ="ml-4">
                <h5>Filter by</h5>
                <hr/>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
        )
    }
}
