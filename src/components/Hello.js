import React from 'react';

const Hello=(props)=>{
    // console.log(props);
    return (
        <div>
            <h1>Helloo {props.name}. your the {props.heroName}</h1>
            {props.children}
        </div>
    );
}

export default Hello;
// can also use React.createElement('div',null,'helooo there');

// props
//props are immutable can't change values
// props get passed to the component
// function parameters
// props are immutable
// props -Functional Component
// this.props-Class component

// state
// managed with in the component
// variables declared in function body
// state can be changed
// useState Hook-Functional component
// this.state -Class component


