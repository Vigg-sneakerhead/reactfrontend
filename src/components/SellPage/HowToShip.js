import React, { Component } from 'react'

export default class HowToShip extends Component {
    render() {
        return (
            <div className ="container-fluid my-5">
                 <img 
                    src="assets/images/how-to-sell/ship/ship.png"
                    style={{"position":"relative", objectFit:'contain', height: '100%', width: '100%'}}
                />
            </div>
        )
    }
}
