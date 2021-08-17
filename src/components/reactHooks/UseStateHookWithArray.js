import React,{useState} from 'react'

const UseStateHookWithArray=()=>{
    const [items,setItems] =useState([]);

    const addItem=()=>{
        setItems([ ...items,{//copy array items
            id:items.length,
            value:Math.floor(Math.random() * 100) +1
        }])
    }
    return (
        <div>
            <button onClick={addItem}>Add Item</button>    
            <ul>
              {
                  items.map((item)=>(
                     <li key={item.id}>{item.value}</li>
                  ))
              }
            </ul>     
        </div>
    )
}


export default UseStateHookWithArray
