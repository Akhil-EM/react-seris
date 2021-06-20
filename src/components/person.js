import React from 'react'

function Person({person}) {
    // console.log(person)
    
    return (
        <div>
           {
             <h2>name:{person.name}  age:{person.age}</h2>
           }
        </div>
    )
}

export default  Person;