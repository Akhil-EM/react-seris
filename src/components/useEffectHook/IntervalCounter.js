import React,{useEffect,useState} from 'react'

function IntervalCounter() {
    const [count,setCount] = useState(0);
    
    useEffect(()=>{
        setInterval(tick,1000);

        return ()=>{
            clearInterval();
        }
    },[count]);
    //keeps track of the count variable 

    const tick = () => {
        setCount(count + 1);
        // also can be achieved by 
        setCount(prevCount => prevCount + 1 )
    }


    return (
        <div>
            {count}
        </div>
    )
}



export default IntervalCounter;
