import React, { useState } from "react";
import { ImCross } from "react-icons/im";
function Todo({ id, title, completed, changeToggle, removeTodo }) {
  return (
    <div className="todo">
      <div className="todo-title">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            changeToggle(id);
          }}
        />
        <p className={`${completed}?"completed":""`}>{title}</p>
      </div>
     
      {/* <p>id : {id}</p> */}
<div className="cross-btn" onClick={() => removeTodo(id)}>
<ImCross></ImCross>
</div>

    </div>
  );
}

export default Todo;
