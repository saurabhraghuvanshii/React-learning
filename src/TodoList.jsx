import { useState } from "react";

const TodoList = () => {
	const [tasks, setTasks] = useState([]);
    const [newTask, setNewTasks] = useState("");

    function handleInputChange(event) {
        setNewTasks(event.target.value);
    }

    function addTask() {
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTasks("");
        } 
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks)
    }

    function moveTaskUp(index){
       if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
            setNewTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if (index < tasks.length-1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
            setNewTasks(updatedTasks);
        }
    }

    return <div>
        <h1>To-Do-List</h1>

        <div>
            <input
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}
            />
            <button onClick={addTask}>Add</button>
        </div>

        <ol>
            {tasks.map((task, index) => 
                <li key={index}><span>{task}</span>
                <button onClick={()=> deleteTask(index)}>Delete</button>
                <button onClick={()=> moveTaskUp(index)}>Up</button>
                <button onClick={()=> moveTaskDown(index)}>Down</button>
                </li>
            )}
        </ol>
    </div>;
};

export default TodoList;
