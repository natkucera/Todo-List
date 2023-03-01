import React from "react";
import Todo from "./Todo"

function TodoList({ todos, toggleComplete, deleteTodo, editTodo}) {

    return(
        <ul>
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
            ))}
        </ul>
    );
}

export default TodoList;