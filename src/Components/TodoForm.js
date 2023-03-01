import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IconButton } from "@mui/material";
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';

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
        <div className="add-section">
            <form onSubmit={handleSubmit}>
                <input
                    name="add-input"
                    type="text"
                    value ={todo.task}
                    onChange={inputChange}/>
                <IconButton
                    aria-label="add"
                    type="submit">
                    <AddCircleSharpIcon className="add-icon" style={{ color: "#1B567A" }}
                    />
                </IconButton>
            </form>
        </div>

    )
}

export default TodoForm