import React from "react";

function Todo({todo, toggleComplete, deleteTodo}) {

    function handleCheckbox() {
        toggleComplete(todo.id)
    }

    function handleDelete() {
        deleteTodo(todo.id)
    }

    return (
        <div className="todo-items">
            <input type="checkbox" onClick={handleCheckbox}/>
            <li
                style={{
                    textDecoration: todo.completed ? "line-through" : null
                }}>
                {todo.task}
            </li>
            <button onClick={handleDelete}>Delete</button>
        </div>

    );
}

export default Todo;