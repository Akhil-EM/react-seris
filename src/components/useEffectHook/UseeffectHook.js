import React,{useState,useEffect} from 'react'

function UseeffectHook() {

    const [count,setCount] = useState(0);
    const [name,setName] = useState('');

    useEffect(()=>{
         console.log('use effect updating component')
         document.title = `You clicked ${count} times`

         
    },[count])//specify state or props only render on change of count value 

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
            <button onClick={()=>setCount(count+1)}>Click {count} times</button>
        </div>
    )
}

export default UseeffectHook
///things are added here which perform actions prior to rendered .