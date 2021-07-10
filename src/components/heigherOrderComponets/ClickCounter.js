import React, { Component } from 'react'
import UpdatedComponent from './withCounter';
class ClickCounter extends Component {
    render() {
        const {count,parentCountIncrementor}=this.props; 
        return (
            <div>
                <button onClick={parentCountIncrementor}> Clicked {count} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter);