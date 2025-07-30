import React, { useState } from 'react'

function StateWithObject() {
    const [user,setUser] = useState({id:0,name:"hol",class:"89"})
  
    return (
    <div>
{/* <ul>
  <li key={user.id}>{user.name}</li>
</ul> */}
<p>name: {user.name}</p>
<p>class: {user.class}</p>
    </div>
  )
}

export default StateWithObject