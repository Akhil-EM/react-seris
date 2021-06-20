import React from 'react';

class Welcome extends React.Component{
    
    render(){
        const {heroName,name}=this.props;//destructuring
        return(
            <h1>Welcome here..... {name}*****{heroName}</h1>
        );
    }
}

export default Welcome;

// More feature rich ui
// Maintain their own private data-sate
// Complex ui logic
// Provide Life cycle hooks
// Stateful/Smart/Container


