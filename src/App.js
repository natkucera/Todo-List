import React, { useEffect, useState } from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import './stylesheet.css';

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY)) || []);
  
  useEffect(() => {
    const storageTodos = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storageTodos !== null) setTodos(JSON.parse(storageTodos));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function editTodo(newTodo) {
    setTodos(
      todos.map(todo => {
        if (todo.id === newTodo.id) {
          return {
            ...newTodo
          }
        }
        return todo;
      })
    )
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    )
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <div className='content'>
        <h1><span><strong>ToDo</strong> List</span></h1>
        < TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
        < TodoForm addTodo={addTodo}/>
      </div>
    </div>
  );
}

export default App;