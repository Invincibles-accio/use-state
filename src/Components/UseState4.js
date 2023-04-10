
import React, { useState } from 'react';

const UseState4 = () => {
    let [count, setCount]  = useState(0)

    function increaseCount(){
        setCount(prevCount => prevCount+1)   // async
        setCount(prevCount => prevCount+1)   // async
    }

    function increaseCount1(){
        setCount(count+1)
        setCount(count+1)
    }
  

return (
<div>
       <h1> {count} </h1>
       <button onClick={increaseCount1}> Increase </button>  
</div>
);
}

export default UseState4;