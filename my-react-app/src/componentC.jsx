import React, {useContext} from "react";
import { UserContext } from "./componentA.jsx";
import ComponentD from "./componentD.jsx"
function ComponentC(){
    const user= useContext(UserContext);
    return(<div className="box">
        <h1>Component C</h1>
        <h2>{`Your welcome ${user}`}</h2>
        <ComponentD/>
        
    </div>)
}
export default ComponentC