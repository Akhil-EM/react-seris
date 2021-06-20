import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            parentName:'parent' ,
        }

        this.greetParent=this.greetParent.bind(this);//binds the fun to this method
    }
    
    greetParent=(_name)=>{
        console.log(_name);
        alert(`Hello ${this.state.parentName} from ${_name}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}
