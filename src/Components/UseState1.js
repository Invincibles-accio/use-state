
import React, { useState } from 'react';
// count = 0 ,  setCount is a function (inbuilt)
          // x = > array of two elements

const useState1 = () => {
    let [count, setCount]  = useState(0) // 1
    console.log("I loaded again")  // why it is loading twice
    let a = 10 
   function increaseCount(){
       console.log("I am getting accessed")
        setCount(count+1) // count = 1
        // setCount(count+1) // count = 2
        a = a+1 // 11
        console.log("inside function ", a) // 11
   }
   console.log("outside function",a)

return (
<div>
   <h1> {count} </h1>
   <button onClick={increaseCount}> Increase </button>
</div>
);
}

export default useState1;