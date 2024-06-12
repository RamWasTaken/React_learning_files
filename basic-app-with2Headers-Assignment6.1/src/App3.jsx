//pushing down the state
import React, { useState } from 'react'

export const App3 = () => {
  return (
    <div>
      <HeaderWithTitle/>
      <Header title="THis is just non-changing title"></Header>
    </div>
  )
}

function HeaderWithTitle(){
    const [title,setTitle] = useState("This is changing title")
    function handleClick(){
        setTitle("New value : "+Math.random());
    }
    return(
        <>
            <button onClick={handleClick} >Click here to change title</button>
            <Header title={title} ></Header>
        </>
    )
}
function Header(props){
    return(
        <>
            <h1>{props.title}</h1>
        </>
    )
}