import React, { Component } from 'react'

class EventClass extends Component {
    clickHandler(){
        console.log('this is the click');
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventClass
