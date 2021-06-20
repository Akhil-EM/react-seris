import React from 'react';

// const Hello=(props)=>{
// const {name,heroName}=props //also can used as this

const Hello=({name,heroName,children})=>{
    // console.log(props);
    return (
        <div>
            <h1>Helloo {name}. your the {heroName}</h1>
            {children}
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


