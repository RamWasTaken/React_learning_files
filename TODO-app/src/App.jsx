import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react';

function App() {
  
  const [todos,setTodos] =  useState([{
    title : "Go to Gym",
    desc : "go to gym from 7-9",
    completed : false
  },{
    title : "Go to study",
    desc : "go to Study from 9-10",
    completed : true
}]);

  return (
        <div>
          {JSON.stringify(todos)} 
          {/* shows result but looks ugly */}

          <Todo title={todos[0].title} desc={todos[0].desc} />
          {/* prints the todo correclty but hard to iterate */}

          {todos.map(function(todo){
            return <Todo title={todo.title} desc={todo.desc} />
          })} 
          {/* map will iterate through each todos like todos[0] then todos[1] ... feeding it to function(todo) getting <Todo /> in return */}
        </div>
  )
}

function Todo(props){
  return(
    <div>
      <h1> {props.title} </h1>
      <h2>{props.desc} </h2>
    </div>
  )
}

export default App
