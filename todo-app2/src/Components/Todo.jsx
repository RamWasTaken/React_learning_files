import React, { useState } from 'react'

export const Todo = (props) => {
  const [done, setDone] = useState(props.done)

  function handleClick() {
    if (!done) { setDone(true) }
    else { setDone(false) }
  }
  return (
    <div>
      <h2>Title : {props.title} </h2>
      <br />
      <p>{props.desc}</p>
      <br />
      <button onClick={handleClick} >{done ? "Done" : "NotDone"}</button>
    </div>
  )
}