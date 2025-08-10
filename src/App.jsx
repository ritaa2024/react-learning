import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import TodoForm from "./TodoForm";
import Todos from "./Todos";
import {ToastContainer} from 'react-toastify'
function App() {
  const [todo, setTodo] = useState([
    { id: 0, title: "1stOne", completed: true },
    { id: 1, title: "2ndOne", completed: true },
    { id: 2, title: "3rdOne", completed: false },
  ]);
  const addTodo = (newTodo) => {
    // console.log(newTodo)
    setTodo((prevTodo) => [...prevTodo, newTodo]);
  };

  const changeToggle = (id) => {
    setTodo((prevTodo) => {
      return prevTodo.map((todo) => {
        console.log("todo---", todo);
        if (id === todo.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  const removeTodo = (id) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((todo) => {
        return id !== todo.id;
      });
    });
  };
  return (
    <div className="container">
    <ToastContainer></ToastContainer>
      <h1 className="main-title">Todo list</h1>

      <TodoForm addTodo={addTodo}></TodoForm>
      <Todos
        todos={todo}
        changeToggle={changeToggle}
        removeTodo={removeTodo}
      ></Todos>
    </div>
  );
}

export default App;
