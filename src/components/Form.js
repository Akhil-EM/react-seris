import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             formValue:''
        }
    }

    onInputChange=(event)=>{
        this.setState({formValue:event.target.value})
    }
    
    render() {
        return (
            <div>
                <input type='text' 
                       value={this.state.formValue} 
                       placeholder='enter a value'
                       onChange={this.onInputChange} />
                <h3>{this.state.formValue}</h3>
            </div>
        )
    }
}

export default Form
