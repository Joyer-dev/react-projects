import React, {useState,useEffect,useRef} from 'react';
function StopWatch(){
    const [isRunning, setIsRunning]=useState(false);
    const [elapsetime, setElapseTime]=useState(0);
    const intervalIdRef =useRef(null);
    const startTimeRef =useRef(0);
useEffect (() =>{
    if(isRunning){
        intervalIdRef.current =setInterval(() =>{
setElapseTime(Date.now()-startTimeRef.current)
        },10);
    }
    return () =>{
        clearInterval(intervalIdRef.current);
    }

},[isRunning]);

function start(){
    setIsRunning(true);
    startTimeRef.current=(Date.now() - elapsetime);

}
function stop(){
setIsRunning(false)
}
function reset(){
    setElapseTime(0);
    isRunning(false);

}
function format(){
    let hours=Math.floor(elapsetime/(1000*60*60));
    let minutes=Math.floor(elapsetime/(1000*60)%60);
    let seconds=Math.floor(elapsetime/(1000)%60);
    let milliseconds=Math.floor((elapsetime%1000)/10);

 return (`${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}.${milliseconds}`);
}
 return(<div className='stopwatch'>
    <div className='display-watch'>{format()}</div>
    <div className='controls'>
        <button className='start-button' onClick={start}>Start</button>
        <button className='stop-button' onClick={stop}>Stop</button>
        <button className='reset-button' onClick={reset}>Reset</button>
    </div>

 </div>)
}
export default StopWatch