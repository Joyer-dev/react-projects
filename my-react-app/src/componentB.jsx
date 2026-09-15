import React,{useContext} from "react"
import { UserContext } from "./componentA"
import ComponentC from "./componentC"

function ComponentB(){
    const user =useContext(UserContext);
    return(<div className="box">
        <h1>Component B</h1>
        <h2>{`Hellow again ${user}`}</h2>
        <ComponentC/>
    </div>)
}
export default ComponentB