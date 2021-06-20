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

//props are immutable can't change values
