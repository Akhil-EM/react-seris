import React,{useContext} from 'react';
import {ChanelContext,UserContext} from '../../App';
import ComponentC from './ComponentC'

function ComponentB() {
   const user = useContext(UserContext);
   const chanel = useContext(ChanelContext);
    return (
        <div>
            <ComponentC/>
            {user}  ---- {chanel}
        </div>
    )
}

export default ComponentB
