import React, { Component } from 'react'
import ComponetF from './ComponetF'
import UserContext from './userContext'
 class ComponetE extends Component {
    render() {
        return (
          <div>
              component E context {this.context}
              <ComponetF/>
          </div>
          
        )
    }
}

ComponetE.contextType = UserContext;

export default ComponetE
