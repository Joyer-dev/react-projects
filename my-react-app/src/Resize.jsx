import React, {useState,useEffect} from 'react';

function Mycompon(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize",handleResize);
        console.log('event listener added');
        return () =>{
            window.removeEventListener("resize",handleResize);
            console.log('event listener removed')
        }
    },[])
     useEffect(()=>{
        document.title=`Size: ${height}x${width}`

     },[height,width])
    function handleResize(){
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }
return(<div>
    <p>Width: {width} px</p>
    <p>Height: {height} px</p>
</div>)
}
export default Mycompon