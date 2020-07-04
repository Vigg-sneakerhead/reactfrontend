import React, { Component } from 'react';
import background from '../../background.jpg';
import FrontPage from './FrontPage';

export default class HomePage extends Component {
    render() {
        return (
            <div className ="home-page">
                <img className ="background" src = {background}/>
            </div>
        )
    }
}
