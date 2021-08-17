import React,{useState} from 'react'

function USeStateHookWithPreState() {
    const initialState = 0;
    const [count,setCount] = useState(initialState);

    const incrementFive=()=>{
        for(let i=0;i<5;i++){
            setCount(prevCount=>prevCount+1)
        }
    }
    return (
        <div>
            Count :{count}
            <br/>
            <button onClick={()=>setCount(initialState)}>Reset</button>
            <br/>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

export default USeStateHookWithPreState;
