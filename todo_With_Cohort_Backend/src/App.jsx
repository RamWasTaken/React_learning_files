import { useEffect, useState } from "react"
import { Todo } from "./Todo";

function App() {

  const [todos, setTodos] = useState([{}]);

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos")
      .then(async function (res) {
        const json = await res.json();
        setTodos(json.todos);
      })
  }, []);

  return (
    <>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} desc={todo.description} done={todo.completed} />)}
    </>
  )
}
export default App