import React, { Component } from 'react';
import styled from 'styled-components';
import frontpageicon from './frontpageicon.png';
export default class FrontPage extends Component {
    render() {
        return (
            <FrontPageContainer>
                            <div  className='container'>
                                <div className ="row">
                                    <div id = "icon" className ="mx-auto">
                                        <img src ={frontpageicon} className ="image-icon"></img>
                                    </div>
                                    
                                </div>
                                <div className ="row row-title mx-auto text-light">
                                    <div id = "title" className ="front-page-title mx-auto ">
                                        <h2>CHỌN ĐÔI SNEAKERS BẠN MƠ ƯỚC</h2>
                                    </div>
                                </div>
                                <div class="card-body row no-gutters align-items-center">
                                            <div id ="searchicon" class="col-auto mr-3 text-light">
                                                <i class="fas fa-search"/>
                                            </div>
                                   
                                            <div class="col">
                                                <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Sneakers, brand, designer..."/>
                                            </div>
                                 
                                           
                        
                                </div>
                            
                            </div>
            </FrontPageContainer>
        )
    }
}
const FrontPageContainer = styled.div`
position:fixed; 
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;

#searchbar {
    color:var(--mainWhite);
}

`