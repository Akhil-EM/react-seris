import React from 'react';

class Welcome extends React.Component{
    
    render(){
        return(
            <h1>Welcome here..... {this.props.name}</h1>
        );
    }
}

export default Welcome;

// More feature rich ui
// Maintain their own private data-sate
// Complex ui logic
// Provide Life cycle hooks
// Stateful/Smart/Container


