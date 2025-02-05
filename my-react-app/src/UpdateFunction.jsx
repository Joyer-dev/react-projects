import React, {useState} from 'react';
//passed an argument to a setState()usually eg. setYear(y =>y+1);
function UpdateFunction(){
    const [count, setCount]=useState(0);
    function increment(){
        setCount(Prevcount =>Prevcount + 1);
        setCount(Prevcount =>Prevcount + 1);
        setCount(Prevcount =>Prevcount + 1);
    }
    function decrement(){
        setCount(count - 1);
    }
    function reset(){
setCount(0)
    }
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    );
}
export default UpdateFunction