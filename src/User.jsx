import React, { useState } from 'react'

function User({name,age,id,ageIncrese}) {
    console.log("proppppppppp",name,age)
    // const [newAge,setAge] = useState(age);
   
  return (
    <div className='user'>
       
        <p >userName: {name}</p>
        <p >addresss : {age}</p>
       <button onClick={()=>{ageIncrese(id)}}>Increse age </button>
    </div>
  )
}

export default User