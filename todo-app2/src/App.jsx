import { useState } from 'react'
import './App.css'
import { Todo } from './Components/Todo'
import { CreateTodo } from './Components/CreateTodo'

function App() {
  const [todos, setTodos] = useState([{
    title: "i dont have any title at the moment",
    desc: "Veniam officia Quis elit duis vniam.",
    done: false
  }, {
    title: "i dont have any title at the moment",
    desc: "Veniam officia aliqation in aliqua eu veniam.",
    done: false
  }, {
    title: "i dont have any title at the moment",
    desc: "Veniam officia aliqution in aliqua eu veniam.",
    done: false
  }])

  function addTodo() {
    setTodos([...todos, {
      title: "constant k",
      desc: "constant k",
      done: false
    }])
  }
  return (
    <>
      <button onClick={addTodo} >Add constant todo</button>
      <br />
      {/* <p>With memo</p>
      {
        todos.map(function(todo){
          return(
            <CreateTodo title={todo.title} desc={todo.desc} done={todo.done} />
          )
        })
      }
      <br />
      <p>without memo</p> */}
      {todos.map(function (todo) {
        return(<Todo title={todo.title} desc={todo.desc} done={todo.done}></Todo>)
      })}
      <br />
    </>
  )
}

export default App
