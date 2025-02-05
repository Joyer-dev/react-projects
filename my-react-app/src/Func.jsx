import React, {useState,useEffect} from 'react';
function Func(){
    const [count, setCount] =useState(0);
    const [color, setColor]=useState("green")

    useEffect(()=>{
        document.title=`count:${count} ${color}`
    },[count, color]);

    function addCount(){
        setCount(c =>c + 1);
    } function substractCount(){
        setCount(c =>c - 1);
    }
    function changeColor(){
        setColor(c => c==="green" ? "red" :"green")
    }

    return(<div>
        <p style={{color:color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={substractCount}>Subtract</button>
        <button onClick={changeColor}>change color</button>
    </div>

    )

}
export default Func