import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        }
        this.inputRef=React.createRef();
    }

    ClickHandler=()=>{
        this.inputRef.current.focus();
    }
    
    render() {
        return (
            <div>
                <Child ref={this.inputRef}/>
                <button onClick={this.ClickHandler}>Focus Input</button>
            </div>
        )
    }
}
