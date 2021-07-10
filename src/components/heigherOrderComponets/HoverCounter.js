import React, { Component } from 'react'
import UpdatedComponent from './withCounter';

class HoverCounter extends Component {
    
    render() {
        const {count,parentCountIncrementor} =this.props; 
        return (
            <div>
                <h2 onMouseOver={parentCountIncrementor}>Hovered {count} times</h2>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter);