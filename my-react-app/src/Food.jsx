import React, {useState} from 'react';
function Food(){
    const [foods, setFoods]=useState(["Apple","Banana","Orange"])

    function handleAddFood(){
const newFood=document.getElementById('foodie').value;
document.getElementById('foodie').value="";
     setFoods([...foods,newFood]);  
    }

    function handleRemoveFood(index){
          

    }
    return(
        <div>
            <h1>List of Foods</h1>
            <ul>{foods.map((food,index) => 
                <li key={index} onClick={()=>{handleRemoveFood(index)}}> {food}</li>)}</ul>
            <input type="text" id="foodie" placeholder='Enter Food name'/>
            <button onClick={handleAddFood}>Add</button>
        
        </div>
    )
}
export default Food