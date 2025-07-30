import React from "react";
import User from "./User";
function Users({ users,ageIncrese }) {
  console.log("user-----------", users);
  return (
    <div>
      {users.map((user) => (
      
        <User {...user} key={user.id} ageIncrese={ageIncrese}></User>

      ))}
    </div>
  );
}
//  {/* <User userDetails={user}></User> */}
export default Users;
