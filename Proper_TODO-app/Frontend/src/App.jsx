import {useState} from 'react';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';
function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos/")
    .then(async function (response) {
      const data = await response.json();
      // setTodos(data);
      console.log(data);
      console.log("-------------------");
      // console.log(todos);
      console.log("-------------------");
      console.log(data.json());
    })

  return (
    <div>
      hi there
      <CreateTodo />
      <Todos
        todos={[{
          title: "Buy Milk",
          desc: "Go to the market and buy milk",
        }, {
          title: "Buy Bread",
          desc: "Go to the market and buy Bread",
        }]}
      />
    </div>
  )
}

export default App
