
import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Todolist from './components/Todolist'

function App() {
 
  const [input, setInput] = useState("");
  const [todos, setTodo] = useState([]);
  const [stauts,setStautes]=useState("all");
  const [filterTodo,setfilter] =useState([]);
  

  useEffect(()=>{
    filterhnadeler();
    saveLocalTodos();
  },[todos,stauts]);
  
  useEffect(()=>{
    getLocalTodos();
  },[])


  const filterhnadeler =()=>{
    switch (stauts){
      case "completed":
        setfilter(todos.filter((todo)=>todo.completed === true))
        break;
        case 'uncompleted':
          setfilter(todos.filter((todo)=>todo.completed === false))
          break;
          default:
            setfilter(todos);
            break;
    }
  } 
  const saveLocalTodos = ()=>{
      localStorage.setItem('todos',JSON.stringify(todos))
  }

  const getLocalTodos = ()=>{
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos',JSON.stringify([]))
    }else{
    let todolocal =   JSON.parse(localStorage.getItem('todos'))
    setTodo(todolocal)
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form  
       input={input} 
       setTodo={setTodo} 
       todos={todos}
       setInput={setInput}
       setStautes={setStautes}
       />
      <Todolist 
      filterTodo={filterTodo}
       setTodo={setTodo} todos={todos}/>
    </div>
  );
}

export default App;
