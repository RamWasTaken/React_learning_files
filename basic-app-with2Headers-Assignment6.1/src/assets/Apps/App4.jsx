import { useState } from "react"
import { memo } from 'react';

export function App4() {
  const [firstTitle, setFirstTitle] = useState("my name is harkirat");

  function changeTitle() {
    setFirstTitle("My name is " + Math.random())
  }

  return (
    <div>
      <button onClick={changeTitle}>Click me to change the title</button>
      <Header title={firstTitle} />
      <br />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <p>You will notice that this whole parent is Re-rendering but these Header arent re-rendering bc they are getting redered by memo and its not re-rendering them since there is no change in them.</p>
    </div>
  )
}

const Header = memo(function ({title}) {
  return <div>
    {title}
  </div>
})