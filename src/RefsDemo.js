import React, { Component } from 'react'

export default class RefsDemo extends Component {
    constructor(props) {
        super(props)
       
        this.inputRef=React.createRef();
        
    }
    componentDidMount(){
        this.inputRef.current.focus(); //focus the current element
        // console.log(this.inputRef)
    }
    
    clickHandler=()=>{
        alert(this.inputRef.current.value);
    }
    render() {
        return (
            <div style={{textAlign:'center'}}>
                <input ref={this.inputRef} type='text' placeholder='this is demo for ref'/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}
