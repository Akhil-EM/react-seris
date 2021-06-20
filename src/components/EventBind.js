import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props){
        super(props);

        this.state={
            message:'hello'
        }
    }
    
    clickHandler=()=>{
        this.setState({message:'bye!'})
    }
    render() {
        return (
            <div>
                {this.state.message}
                <br/>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default EventBind
