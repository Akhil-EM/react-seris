import React,{useState} from 'react'

function UseStateHookWithObject() {
    const [name,setName]=useState({firstName:'',lastName:''});
    return (
        <div>
            <form>
                <input type="text" value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
                <input type="text" value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
                <h4>firstName:{name.firstName} ,lastName:{name.lastName}</h4>
                <h6>{JSON.stringify(name)}</h6>
            </form>
        </div>
    )
}

export default UseStateHookWithObject
