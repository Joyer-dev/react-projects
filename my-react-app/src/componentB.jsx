import ComponentC from "./componentC"
function ComponentB(){
    return(<div className="box">
        <h1>Component B</h1>
        <h2>{`Hellow again ${user}`}</h2>
        <ComponentC/>
    </div>)
}
export default ComponentB