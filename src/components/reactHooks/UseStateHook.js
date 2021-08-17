import React,{useState} from 'react'

function UseStateHook() {
   const[count,setCount] = useState(0);
   // only call at top level and in functional component
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
        </div>
    )
}

export default  UseStateHook;



