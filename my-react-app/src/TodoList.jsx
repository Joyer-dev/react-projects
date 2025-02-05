import React, {useState} from 'react';
function TodoList(){

    const [tasks, setTasks] =useState(["Eat BreakFast", "Take a shower","Watch youtubeS"]);
    const[newTasks, setNewTasks]= useState("");
    const[date, setNewDate]=useState("")

    function handleInputChange(event){
        setNewTasks(event.target.value);

    }
    function handleInputDateChange(event){
        setNewDate(event.target.value);

    }
    function addDate(){

        if (date.trim ()!==""){
            setNewDate(d =>[...d,date])
            setNewDate("")
             }
    }
    function addTask(){
    if (newTasks.trim ()!==""){
        setTasks(t =>[...t,newTasks])
        setNewDate(d =>[...d,newTasks])
        setNewTasks("")
         }
    }
   function deleteTask(index){
    setTasks(tasks.filter((_,i)=> i !== index));
   }

   function moveTaskUp(index){
    if(index>0){
        const updatedTask=[...tasks];
        [updatedTask[index],updatedTask[index-1]]=
        [updatedTask[index-1],updatedTask[index]]
        setTasks(updatedTask);
    }

   }
   function moveTaskDown(index){
    if(index<tasks.length-1){
        const updatedTask=[...tasks];
        [updatedTask[index],updatedTask[index+1]]=
        [updatedTask[index+1],updatedTask[index]]
        setTasks(updatedTask);
    }
    
   }

   return(<div className="to-do-list">
    <h1>To-Do-List</h1>
    <div>
        <input
        type="text"  placeholder='Enter a Task...'
        onChange={handleInputChange} value={newTasks}/>
        <input type="date" onChange={handleInputDateChange} value={date}/>
         <button class="add-button" onClick={addTask} >Add</button>
    </div>
   <ol>{tasks.map((task,index) =><li key={index}>
    <span className="task">{task}</span>
    <button className="delete-button" onClick={ () =>
         deleteTask(index)}>Delete</button>
         <button className="move-button" onClick={ () =>
         moveTaskUp(index)}>👆</button>
         <button className="move-button" onClick={ () =>
         moveTaskDown(index)}>👇</button>
    </li>)}</ol>
   </div>)
}
export default TodoList 