import React from 'react';

class Message extends React.Component{

    constructor(){
        super();//refers super class
        this.state={
            userName:'visitor'
        }
    }
    
    subscribe=()=>{
        
        if(this.state.userName==='visitor'){
            
            this.setState({userName:'akhil'});
        }else{
            this.setState({userName:'visitor'});
        }
        
    }



     render(){
         return(
              <div>
                  <h1>Welcome {this.state.userName}</h1>
                  <button onClick={this.subscribe}>Subscribe</button>
              </div>
         );
     }
}

export default Message;