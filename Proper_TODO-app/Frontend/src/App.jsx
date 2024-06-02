import { useState } from 'react';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';
function App() {
  const [todos, setTodos] = useState([]);

  // fetch("http://localhost:3000/todos")
  //   .then(async function (response) {
  //     const data = await response.json();
  //     // since the structure of data is 
  //     // [
  //     //     {
  //     //         "_id": "66573b0565164e9373c1e37c",
  //     //         "title": "GO to Gym",
  //     //         "desc": "go to the gym at 9",
  //     //         "completed": false
  //     //     }
  //     // ]
  //     // we will directly set this data to todos state
  //     setTodos(data.todos);
  //     console.log(data);
  //   })
// this is wrong way to fetch data from backend , since it will execute every time the component is rendered and since we are setting the state inside the then block, it will cause an infinite loop
// we will setTodo then we will fetch the data from backend again we will setTodo and so on...

  return (
    <div>
      hi there
      <CreateTodo />
      <Todos
        todos={todos}
      />
    </div>
  )
}

export default App
