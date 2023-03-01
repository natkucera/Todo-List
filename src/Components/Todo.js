import React, { useState } from "react";
import { IconButton } from "@mui/material";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

function Todo({todo, toggleComplete, deleteTodo, editTodo}) {
    const [edit, setEdit] = useState(false);
    const [newTodo, setNewTodo] = useState(todo.task);

    function handleCheckbox() {
        toggleComplete(todo.id)
    }

    function handleDelete() {
        deleteTodo(todo.id)
    }

    function handleEdit() {
        if(edit){
            todo.task = newTodo
            editTodo(todo)
        }
        setEdit(!edit)
    }


    function newInput(e) {
        let newTodo = e.target.value
        setNewTodo(newTodo)
    }

    return (
        <div className="todo-items">
            <label className="form-control">
                <input
                    type="checkbox"
                    readOnly
                    name="checkbox"
                    checked={todo.completed}
                    onClick={handleCheckbox}
                />
            </label>

            <input
                    type="text"
                    name="task-input"
                    disabled={!edit}
                    value={newTodo}
                    onChange={newInput}
                    style={{textDecoration: todo.completed ? "line-through #1B567A 2px" : null}}
                />
            <IconButton
                aria-label="delete"
                onClick={handleDelete}>
                <DeleteOutlinedIcon
                className="delete-icon"
                style={{ color: "#1B567A"}}
                />
            </IconButton>

            <IconButton
                aria-label="edit"
                onClick={handleEdit}>
                {!edit ?
                <EditOutlinedIcon className="edit-icon" style={{ color: "#1B567A"}} /> : 
                <SaveOutlinedIcon className="save-icon" style={{ color: "#1B567A"}}/>}
            </IconButton>

        </div>

    );
}

export default Todo;