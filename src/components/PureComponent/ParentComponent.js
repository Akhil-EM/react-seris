import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
import MemoComp from './MemoComp'
class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'amal',
        }
    }
    
    componentWillMount(){
        setInterval(()=>{
        this.setState({name:'akhil'})
        },2000)
    }
    render() {
        console.log('********* Parent Component ***************')
        return (
            <div>
                Parent Component
                {/* <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp> */}
                <MemoComp name={this.state.name} />           
            </div>
        )
    }
}

export default ParentComponent

//if the parent state not updating but rendering  memo or pure component wil
// stop rending of child component

