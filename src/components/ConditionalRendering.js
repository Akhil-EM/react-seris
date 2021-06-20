import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true,
        }
    }
    
    render() {
        //if else
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>
        //             Welcome Akhil
        //         </div>
        //     );
        // }else{
        //     return(
        //         <div>
        //             Welcome Gust
        //     </div>
        //     );
        // }
        
        //element variable
        // let message;
        // if(this.state.isLoggedIn){
        //     message=<div>Welcome Akhil</div>
        // }else{
        //     message=<div>Welcome Gust</div>
        // }

        // return (message);

        //ternary operator
        // return (
        //     this.state.isLoggedIn?
        //     <div>Welcome Akhil</div>:
        //     <div>Welcome Guest</div>
        // )
        return this.state.isLoggedIn&&<div>Welcome Akhil</div> //short circuit operator
        
        


    }
}

export default  ConditionalRendering