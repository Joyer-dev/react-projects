import React, {useState} from 'react';
function Motors(){
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear]=useState(new Date().getFullYear());
    const [carMake, setCarMake] =useState("");
    const [carModel, setCarModel]=useState("");
     
    function handleAddCar(){
        const newCar={
            year:carYear,
            make:carMake,
            model:carModel
        }
        setCars(cars =>[...cars,newCar])
        setCarYear(new Date().getFullYear());
        setCarModel("");
        setCarMake(""); 
    }
    function handleRemoveCar(index){
       
 setCars(cars.filter((Element,i) => i!==index));
        
    }
    function handleYearChange(event){
        setCarYear(event.target.value)

    }
    function handleCarMakeChange(event){
        setCarMake(event.target.value)
        
    }
    function handleCarModelChange(event){
        setCarModel(event.target.value)
        
    }

    return(<div>
        <h2>List of Cars</h2>
        
        <ul>
            {cars.map((car,index)=><li key={index} onClick={ () => {handleRemoveCar(index)}}>
                {car.year} {car.make} {car.model}
                
            </li>)}
        </ul>
        <input type="number" onChange={handleYearChange} value={carYear}/><br/>
        <input type="text" onChange={handleCarMakeChange} value={carMake}
        placeholder='Enter Car Make'/><br/>
        <input type="text" onChange={handleCarModelChange} value={carModel}
        placeholder='Enter Car Model'/><br/>
        <button onClick={handleAddCar}>Add Car</button>
        </div>
        
    )
}
export default Motors