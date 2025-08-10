import React from 'react'
import Todo from './Todo'

function Todos({todos,changeToggle,removeTodo}) {

  return (
    <div>
      {todos.map((todo)=><Todo {...todo} key={todo.id} changeToggle={changeToggle} removeTodo={removeTodo}></Todo>)}
    </div>
  )
}

export default Todos