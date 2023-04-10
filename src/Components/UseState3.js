


import React, { useState } from 'react';

let initalValue = 0

function display(){
   console.log("I am getting executed")
   return 0
}
const useState1 = () => {
    let [count, setCount]  = useState(()=>{console.log("Hello")
      return 0
}) 

// 1
     // count = 0 
    function increaseCount(){
        setCount(count+1)
    }
    

return (
<div>
   <h1> {count} </h1>
       <button onClick={increaseCount}> Increase </button>  
</div>
);
}

export default useState1;