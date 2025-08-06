import React, { useState } from 'react'
import {v4 as uuid} from 'uuid'
function TodoForm({addTodo}) {

  const [title,setTitle] = useState("");

const handleSubmit = (e)=>{
  // console.log(title)
  e.preventDefault();
  if(title.trim().length===0){
    alert("pls add title")
    return;
  }
  const newTodo = {
    title:title,
    completed:false,
    id:uuid()
  }
  addTodo(newTodo)
  setTitle("")
}
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value) }/>
      <button type='submit'>Add</button>
    </form>
    </div>
  )
}

export default TodoForm