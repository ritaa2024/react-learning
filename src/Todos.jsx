import React from 'react'
import Todo from './Todo'

function Todos({todos,changeToggle}) {

  return (
    <div>
      {todos.map((todo)=><Todo {...todo} key={todo.id} changeToggle={changeToggle}></Todo>)}
    </div>
  )
}

export default Todos