import React, { Component } from 'react'

const FrInput=React.forwardRef((props,ref)=>{
        return(
            <div>
                <input type="text" ref={ref} />
            </div>
        )
    }
)  

export default  FrInput;