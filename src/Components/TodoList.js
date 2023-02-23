import React from "react";
import Todo from "./Todo"

function TodoList({ todos, toggleComplete, deleteTodo }) {

    return(
        <ul>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
            ))}
        </ul>
    );
}

export default TodoList;