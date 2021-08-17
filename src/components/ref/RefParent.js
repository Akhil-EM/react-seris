import React, { Component } from 'react'
import Input from './Input'

class RefParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
        }
        this.componentRef = React.createRef();
    }
    
    focusComponent=()=>{
        this.componentRef.current.focusInput(); ///child ref
    }

    render() {
        return (
            <div>
               <Input ref={this.componentRef}/>
               <button onClick={this.focusComponent}>Focus input</button>
            </div>
        )
    }
}

export default  RefParent;
