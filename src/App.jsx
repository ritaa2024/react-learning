import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import TodoForm from "./TodoForm";
import Todos from "./Todos";


function App() {
const [todo,setTodo] = useState([
{  id:0,title:"njsd",completed:true},
{  id:1,title:"recat",completed:true},
{  id:2,title:"node",completed:false},

])
const addTodo = (newTodo)=>{
// console.log(newTodo)
setTodo(prevTodo=> [...prevTodo,newTodo])
}

const changeToggle = (id)=>{

setTodo(prevTodo=>{
  return prevTodo.map(todo=>{
      console.log("todo---",todo)
      if(id===todo.id){
        return {...todo,completed:!todo.completed}

      }else{
        return todo;
      }
  })
})
}
  return (
    <>
      <h1 className="main-title">Todo list</h1>
    
 <TodoForm  addTodo = {addTodo}></TodoForm>
 <Todos todos = {todo} changeToggle = {changeToggle}></Todos>
    </>
  );
}

export default App;
