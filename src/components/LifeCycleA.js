import React, { Component } from 'react'

export default class LifeCycleA extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
           name:'akhil'
        }
        console.log('constructor')
      }
    
    static getDerivedStateFromProps(props,state){
        console.log('get derived state')
        return null;
    }

    componentDidMount(){
        console.log('component did mount');
    }
    render() {
        console.log('render method')
        return (
            <div>
                Lifecycle A
            </div>
        )
    }
}
