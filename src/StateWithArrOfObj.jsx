import React, { useState } from 'react'
import Users from './Users'
function StateWithArrOfObj() {
    const [users,setUser] = useState([
        {id:0,name:"Rita",age:30},
        {id:1,name:"Joo",age:40},
        {id:2,name:"Kol",age:50},
        

    ])
     const handleAge = (id)=>{
      console.log(id,"id")
      setUser((prevState)=>{
        return prevState.map((user)=>{
          if(user.id===id){
            return {...user,age:user.age+1}
          }else{
            return user;
          }
        })
      })
    }
  return (
    <div>
<Users users={users} ageIncrese = {handleAge}></Users>
    </div>
  )
}

export default StateWithArrOfObj