import React,{useState} from 'react';
function Mycomponent(){
    const [name ,setName]= useState("Guest");
    const [age ,setAge] =useState(0);
    const[isEmployed, setIsemployed]=useState();
    const updateName =()=>{
        setName("spongeBob");
        
    }
    const incrementAge =()=>{
        
        setAge(age+1);
    }
    const status =()=>{
        setIsemployed(!isEmployed )
    }
    return(
        <div><p>Name: {name}</p>
        <button onClick= {updateName}>Set Name</button>
        <p>Age: {age}</p>
        <button onClick= {incrementAge}>Set Age</button>
        
        <p>isEmployed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick= {status}>Set Status</button>
        </div>
        
    );
}
export default Mycomponent