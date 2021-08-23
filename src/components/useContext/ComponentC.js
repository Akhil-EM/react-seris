import React from 'react'
import {UserContext,ChanelContext} from '../../App'
function ComponentC() {
    return (
        <div>
           <UserContext.Consumer>
              {
                  user => {
                      return (<ChanelContext.Consumer>
                               {
                                   chanel =>{
                                       return <p>welcome {user} your chanel is {chanel}</p>
                                   } 
                                   
                               }
                            </ChanelContext.Consumer>)
                  }
              }
           </UserContext.Consumer>
        </div>
    )
}

export default ComponentC
