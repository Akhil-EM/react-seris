import React,{useContext} from 'react';
import {CountContext} from '../../App';

const ComponentF = () => {
    const countContext= useContext(CountContext);
    return <h1>Component F {countContext.countState}</h1>
}

export default ComponentF;