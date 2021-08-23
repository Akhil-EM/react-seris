import React,{useState,useEffect} from "react";

function HookMouse(){
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
    
    const logMouseMove = e => {
        console.log('Mouse Event ')
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(()=>{
        console.log('useEffect called');
        window.addEventListener('mousemove',logMouseMove);

        return ()=>{
            // this part of code will exicute on unmount of component
            console.log('component will un mount ');
            window.removeEventListener('mousemove',logMouseMove);
        }
    },[])///get called only once 
   return(
       <div>
            Hooks X -{x} Y -{y}
       </div>
   )
}
export default HookMouse;