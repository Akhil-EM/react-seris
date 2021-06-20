import React from 'react'
import Person from './person'
function ListComponent() {
    const color=['yellow','green','blue','white','red','black'];
    const nameList=color.map(item=><h2>{item}</h2>);

    const persons=[{id:1,name:'akhil',age:24},
                   {id:2,name:'dhillu',age:23},
                   {id:3,name:'amal',age:19}];
    
    const personList = persons.map((item,key)=>(
                    <Person key={key} person={item} />
                ))
    return (
        <div>
            {
                // color.map(item=><h2>{item}</h2>)
                // nameList
                personList
            }
        </div>
    )
}

export default  ListComponent