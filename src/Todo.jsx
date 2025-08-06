import React, { useState } from 'react'

function Todo({id,title,completed,changeToggle}) {

  return (
    <div style={{border:"2px solid black",padding:"1rem",margin:"1rem"}}>
        <p>id : {id}</p>
        <p>title : {title}</p>
        {/* <p>completed : {completed ? "true" : "false"}</p> */}
      <input type="checkbox" checked={completed} onChange={()=>{changeToggle(id)}}/>

    </div>
  )
}

export default Todo