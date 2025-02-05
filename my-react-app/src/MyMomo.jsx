import React, {useState} from 'react';
function MyMomo(){
    const [car, setCar] =useState({name:"Ford",
                                        year:2024,
                                        model:"Mustang"
                                       });
    function handleNameChange(event){
        setCar(c =>({...c, name:event.target.value}));
    }
    function handleYearChange(event){
        setCar(c =>({...c, year:event.target.value}));
    }
    function handleModelChange(event){
        setCar(c =>({...c, model:event.target.value}));
    }
    return(<div>
        <p>Your favourite Car is {car.name}, {car.year}, {car.model}</p>
        <input type="text" onChange={handleNameChange} value={car.name}/><br/>
        <input type="number" onChange={handleYearChange}  value={car.year}/><br/>
        <input type="text" onChange={handleModelChange}  value={car.model}/><br/>
    </div>);
}
export default MyMomo