import React from 'react'

const Todo = ({text,setTodo,todo,todos}) => {
    const deleltHnader =()=>{
        setTodo(todos.filter((el) =>  el.id !== todo.id))
    }
    const completedHnadeler = ()=>{
        setTodo(todos.map((item)=>{
            if(item.id === todo.id){
                return{
                    ...item,
                    completed:!item.completed,
                }
            }
            return item;
        }))
    }
  return (
    <div className='todo'>
      <li className={`todo-item ${todo.completed ?"completed":""}`}>{text}</li>
      <button onClick={completedHnadeler} className='complete-btn'>
        <li className='fas fa-check'></li>
      </button>
      <button onClick={deleltHnader} className='trash-btn'>
        <li className='fas fa-trash'></li>
      </button>
    </div>
  )
}
export  default Todo
