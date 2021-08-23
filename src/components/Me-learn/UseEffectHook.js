import React,{useEffect,useState} from 'react'
import axios from 'axios';

const UseEffectHook = () => {
    const [posts,setPosts] =useState([]);
    useEffect(()=>{
       getPosts()
           .then((response)=>{
                setPosts(response)
           }).catch((error)=>{
               console.log(error)
           })
    })

    return (
        
        <div>
            <ul>
                {
                    posts.map((item,key)=>(
                        <li key={key}>{item.title}</li>
                       )) 
                }
            </ul>
        </div>
    )
}


function getPosts(){
    return new Promise((resolve,reject)=>{
          axios.get('https://jsonplaceholder.typicode.com/posts',)
          .then(function (response) {
              resolve(response.data);
          })
          .catch(function (error) {
              reject(error);
          })
    })
}

export default  UseEffectHook