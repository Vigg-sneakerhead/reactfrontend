import React, { Component } from 'react'
import './ProductPage.css';
import PriceBar from './PriceBar';
import SizeBar from './SizeBar';
import ConditionBar from './ConditionBar';
import BrandBar from './BrandBar';




export default class FilterBar extends Component {  
    
    render() { 
        return (
       
             <div className ="ml-4">
                <h5>Filter by</h5>
                <hr/>
                <BrandBar/>
                <hr/>
                <PriceBar/>
                <hr/>
                <SizeBar/>
                <hr/>
                <ConditionBar/>
                
            </div>
  
            
            
        )
    }
}
