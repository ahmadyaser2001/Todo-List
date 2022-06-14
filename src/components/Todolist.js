import React from 'react'
import Todo from './Todo'
const Todolist = ({todos,setTodo, filterTodo}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
       {filterTodo.map((todo)=>(
        <Todo setTodo={setTodo} todo={todo} todos={todos}  text={todo.text} key={todo.id}/>
       ))}
      </ul>
    </div>

  )
}
export default Todolist