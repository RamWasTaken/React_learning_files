import { useState } from 'react'

export function Todo(props) {
    const [done, setDone] = useState(false)
  
    function handleClick() {
      if (props.completed) { setDone(true) }
      else { setDone(false) }
  
    }
    return (
      <div>
        <h1>{props.title}</h1>
        <h2>{props.desc}</h2>
        <button onClick={handleClick} >{done ? "Completed" : "Unfinished"}</button>
      </div>
    )
  }