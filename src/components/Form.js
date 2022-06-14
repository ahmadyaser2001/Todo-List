import React from 'react'
 const Form = ({setInput,todos,setTodo,input,setStautes}) => {
  const inputHandeler =(e)=>{ 
    setInput(e.target.value)
  }
  const submitHnadeler = (e)=>{
    e.preventDefault();
    setTodo([...todos,
      {text:input,completed:false,id:Math.random()*1000},
    ]);
    setInput("");
  }
  const stautsHnadeler=(e)=>{
    setStautes(e.target.value);
  }
  return (
    <form>
    <input value={input} onChange={inputHandeler} type="text" className="todo-input" />
    <button onClick={submitHnadeler} className="todo-button" type="submit">
      <i className="fas fa-plus-square"></i>
    </button>
    <div className="select">
      <select onChange={stautsHnadeler} name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  </form>
  )
}

export default Form
