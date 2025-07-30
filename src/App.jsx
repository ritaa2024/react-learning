import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Test from "./Test";
// import StateWithArray from "./StateWithArray";
import StateWithObject from './StateWithObject';
import StateWithArrOfObj from "./StateWithArrOfObj";
function App() {
  const [username, Setusername] = useState("");
  const [password, Setpassword] = useState("");
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>this is app</h1>
      {/* <Test name="ruhi"></Test> */}
   
    {/* <StateWithArray></StateWithArray> */}
    {/* <StateWithObject></StateWithObject> */}
    <StateWithArrOfObj></StateWithArrOfObj>
    </>
  );
}

export default App;
