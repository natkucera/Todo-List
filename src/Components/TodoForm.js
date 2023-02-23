import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm( {addTodo} ) {

    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function inputChange(e) {
        setTodo({ 
            ...todo,
            task: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuidv4() });
            setTodo({ ...todo, task: ""})
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="task"
                type="text"
                value ={todo.task}
                onChange={inputChange}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoForm