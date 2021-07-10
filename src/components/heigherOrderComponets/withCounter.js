import React from 'react';
const UpdatedComponent=(OriginalComponent)=>{
      
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
            this.incrementCount=this.incrementCount.bind(this);
        }
        
        incrementCount=()=>{
            // this.setState((previousState)=>{
            //     return{count:previousState.count+1}
            // })
            // OR
            this.setState(previousState=>{
                return {count:previousState.count+1}
            })
        }
        render(){   
            return <OriginalComponent count={this.state.count}
                                      parentCountIncrementor={this.incrementCount}/>
        }
    }

    return NewComponent;

}

export default UpdatedComponent;