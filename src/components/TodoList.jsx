import React from 'react'
import TodoItem from './TodoItem';

function TodoList({todos, removeTodo, toggleTodoCompleted}) {
  return (
    <ul>
        {todos.map(todo => <TodoItem key={todos.id} {...todo} toggleTodoCompleted={toggleTodoCompleted} removeTodo={removeTodo}/>)}
    </ul>
  )
}

export default TodoList