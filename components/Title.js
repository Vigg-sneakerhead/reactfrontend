import React from 'react'

export default function Title({name}) {
    return (
        <div className ="row">
            <div className ="col-10 mx-auto my-5 text-center text-title">
                <h1 className="text-capitalize font-weight-bold">
                    {name} 
                </h1>    
            </div>    
        </div>
    )
}
