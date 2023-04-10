import React, { useState } from 'react';

const UseState2 = () => {
    let [count, setCount]  = useState({gold: 0, silver: 0, bronze: 0}) 
    // count = {gold: 0, silver: 0, bronze: 0}
     console.log("Value of count = " , count)
    let {gold, silver, bronze} = count

    function increaseGold() {
        setCount({...count, gold: count.gold + 1})
        // count = count.gold + 1
    }
    function increaseSilver() {
        setCount({...count, silver: count.silver + 1})
    }
    function increaseBronze() {
        setCount({...count, bronze: count.bronze + 1})
    }
    

return (
<div>
   <h1> {gold}, {silver}, {bronze} </h1>
      <button onClick={increaseGold}> Increase Gold </button>
      <button onClick={increaseSilver}> Increase Silver </button>
      <button onClick={increaseBronze}> Increase Bronze </button>
</div>
);
}


export default UseState2;


// count = {gold: 0, silver: 0, bronze: 0} 
// setCount(gold + 1)
// count = 1
// count = {gold: 1, silver: 0, bronze: 0}
// count = {gold: 1, silver: 1, bronze: 0}
// count = {gold: 1, silver: 1, bronze: 1}




// let [count, setCount]  = useState([0,1,2,3,4,5,6,7,8,9]) 


// button 1 => add a value at end to this array 
// button 2 => remove a value from end of this array