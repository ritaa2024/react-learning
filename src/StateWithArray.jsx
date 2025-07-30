import React, { useState } from "react";
// import {v4 as uuid} from 'uuid'
function StateWithArray() {
  const [users, setUser] = useState(["iii","jjj","jkkk"]);
  const [inputUser,setInputUser] = useState("");
const addUser = ()=>{
setUser((prevState)=>{
    return [...prevState,inputUser];
   
}
 
)
setInputUser("");
}
  return (
    <>
      <ul>
        {users.map((user,index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
      <input type="text" name="user" value={inputUser} onChange={(e)=>setInputUser(e.target.value)}/>
      <button onClick={addUser}>add user</button>
    </>
  );
}

export default StateWithArray;
